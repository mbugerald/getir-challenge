const express = require('express');
const router = express.Router();
const Records = require('../schemas/records');


router.post('/', async (req, res) => {
   /*
   * - First retrieve data from the post request json payload and create date objects from from
   *     start_date and end_date values provided.
   * - Afterwards create a simple aggregation pipeline in order to filter and project the expected
   *     results from the records collection.
   * - Create response object to be handle in case of failure and success.
   *
   * */
   try {

      const start_date = new Date(req.body["startDate"]);
      const end_date = new Date(req.body["endDate"]);
      const max_count = req.body["maxCount"];
      const min_count = req.body["minCount"];

      const pipeline = [
         {
            $match: {
               createdAt: {
                  $gte: start_date,
                  $lte: end_date
               }
            }
         },
         { $unwind: {path: '$counts'}},
         {
            $group: {
               "_id": "$_id",
               "key": {"$first": "$key"},
               "createdAt": {"$first": "$createdAt"},
               "totalCount": {"$sum": "$counts"}
            }
         },
         {
            $project : {
               _id : 0,
               totalVisits : 1 ,
               totalValue : 1,
               key: "$key",
               createdAt: "$createdAt",
               totalCount: "$totalCount",
            }
         },
         {
            $redact: {
               $cond: {
                  if: { $lte: [ "$totalCount", min_count ] },
                  then: '$$PRUNE',
                  else: '$$DESCEND'
               }
            }
         },
         {
            $redact: {
               $cond: {
                  if: { $gte: [ "$totalCount", max_count ] },
                  then: '$$PRUNE',
                  else: '$$DESCEND'
               }
            }
         }
      ]

      const posts = await Records.aggregate(pipeline);

      const response = {
         code: 0,
         message: "Success",
         records: posts
      }

      res.json(response);

   } catch (err) {

      console.log(err)

      const response = {
         code: 500,
         message: "Internal server error",
         payload: err
      }

      res.json(response)
   }

});

module.exports = router;
