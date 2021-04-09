# getir-challenge
A simple NodeJS rest API with one endpoint handling only post requests, connected to a mongo database instance, retrieving
data from a given collection in the database with an expected output format.

### Step and instructions
The given api is written in JavaScript with Node framework express, and provides user documentation swagger.
In order to get the application run, ensure NodeJS is installed on your device, navigate to the root of the 
directory and execute the command ```yarn start ```, this will trigger a nodemon server run which is suitable for dev
purposes. Currently, just a single route is provisioned, call the root via the swagger interface provided once the 
API is executed or using postman or any agent of your choice fire up and http request having payload for example:
```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```
This would trigger an API call and return an expected response to the end user, with a payload containing data from the
records collection in the mogo database from the start date to the end date as time range. Moreover, the API will also 
consider the two arguments ``minCount`` and ``maxCount``, in order to return specific records having a sum count of values 
with then range of the two given max and min count variables. The result expected from the api could either be a success with
payload of records and message addressing the success. Not withstanding in case of unexpected or failed response, the API will
return response object with the given 500 status code alongside a serverside error message. With more details of the error within
and object ``payload``.

![alt text](https://zigs-storage.s3.eu-de.cloud-object-storage.appdomain.cloud/preview.png)
