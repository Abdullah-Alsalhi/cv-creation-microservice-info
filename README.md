## microservice to manage user cv data


# How To Run :

* Install all dependencies by running :
    - make sure to be in the directory of `package.json`
    - `npm` >= `5.2.0` this version include `npx` within it.
```
npm install
```

* Copy `.envexample` to `.env`:
```
cp .env.example .env
```

* Add DB credentials to `.env`:

```
DB_TYPE=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings


DATABASE_URL="${DB_TYPE}://${DB_USER}:@${DB_HOST}:${DB_PORT}/${DB_NAME}"
```

* You need to migrate the tables created now 
    - Note : this can be done only once when created db
    - So when scaling up no need to create tables once again
    - so the file of prisma is needed once.

* commands for migrations : 
* You would need prisma installed on your system
```
npm install -g prisma
```
* Once Prisma is installed, navigate to your project directory in the terminal.
* Run the following command to generate the Prisma client:
```
prisma generate
```
***This command will generate the Prisma client based on your Prisma schema definition file (schema.prisma). The Prisma client provides a strongly-typed API to interact with your database.***

* After the Prisma client is generated, you can apply the database migrations to create the tables. Run the following command:

```
prisma migrate deploy --preview-feature
```
***Prisma will prompt you to confirm the deployment of the migrations. Type y and press Enter to confirm.***

***Note: Make sure you have configured the database connection settings in your prisma section of the schema.prisma file. Prisma uses this information to connect to your database.***

### ***Now You Can Run The App by running in the `package.json` directory:***
```
npm run start
```


# Routes :
To add data : http://localhost:3000/user/info

* Insure to provide the JWT that generated from Login system

### Header required:

1. Authorization : "Bearer ${JWT}"

* On missing JWT Or invalid JWT:

```
Unauthorized
```

### Body Post request :

* On Failure:

```
{
    "message": "The given data was not valid",
    "errors": {
        "first_name": "Invalid value",
        "last_name": "Invalid value"
    }
}
```

* On Success :

***Request Body => :***

```
{
    "first_name":"Example",
    "last_name":"Example",
    "country": null,
    "city": null,
    "bio": null,
}
```
***Response Body => :***
```
{
    "id": int,
    "first_name": "Example",
    "last_name": "Example",
    "country": null,
    "city": null,
    "bio": null,
    "created_at": "2023-07-01T12:44:21.000Z",
    "updated_at": "2023-07-01T12:44:21.000Z",
    "user_id": int_from_JWT
}
```

### Body Put request :

* To Edit data : http://localhost:3000/user/info/:id
```
{
    "first_name":"Example",
    "last_name":"Example",
    "country": null,
    "city": null,
    "bio": null,
}
```
***Response Body => :***
```
{
    "id": int,
    "first_name": "Example",
    "last_name": "Example",
    "country": null,
    "city": null,
    "bio": null,
    "created_at": "2023-07-01T12:44:21.000Z",
    "updated_at": "2023-07-01T12:44:21.000Z",
    "user_id": int_from_JWT
}
```

# To add media:

* http://localhot:3000/user/media

* All data are nullable but can be provided:
### Post body request :
```
{
    "personal": null,
    "linkedin": null,
    "github": null
}
```

### body response :

```
{
    "id": int,
    "personal": null,
    "linkedin": null,
    "github": null,
    "created_at": "2023-07-01T12:51:30.000Z",
    "updated_at": "2023-07-01T12:51:30.000Z",
    "user_id": user_from_JWT
}
```

* Get request : 

 route => http://localhost:3000/user/media

```
{
    "id": int,
    "personal": null,
    "linkedin": null,
    "github": null,
    "created_at": "2023-07-01T12:51:30.000Z",
    "updated_at": "2023-07-01T12:51:30.000Z",
    "user_id": user_from_JWT
}
```

* Put request :

http://localhost:3000/user/media/:id

```
// Note: edit can be partial too
{
    "personal":"http://abdullah.com"
}
```

### Contact info route:

* Post body request on => http://localhost:3000/user/contact

```
{
    "email": "abdullah@alsalhi.com",
    "phone": "0550555500"
}
```

* Response body :
```
{
    "id": int,
    "email": "abdullah@alsalhi.com",
    "phone": "0550555500",
    "created_at": "2023-07-01T13:01:15.000Z",
    "updated_at": "2023-07-01T13:01:15.000Z",
    "user_id": from_jwt
}
```

* Put body request on => http://localhost:3000/user/contact/:id

```
{
    "email": "abdullah@alsalhi.com",
    "phone": "0550555500"
}
```

* Response body :
```
{
    "id": int,
    "email": "abdullah@alsalhi.com",
    "phone": "0550555500",
    "created_at": "2023-07-01T13:01:15.000Z",
    "updated_at": "2023-07-01T13:01:15.000Z",
    "user_id": from_jwt
}
```

### Education info route:

* Post body request on => http://localhost:3000/user/edu

```
{
    "institution_name": "SelfLearner",
    "degree": "Bachelor",
    "field_of_study" : "DevOps",
    "end_date": "2023"
}
```

* Response body :
```
{
    "id": int,
    "institution_name": "selflearner",
    "degree": "bachelor",
    "field_of_study": "devops",
    "end_date": "2023",
    "created_at": "2023-07-01T13:11:02.000Z",
    "updated_at": "2023-07-01T13:11:02.000Z",
    "user_id": from_jwt
}
```

* Put body request on => http://localhost:3000/user/edu/:id

```
{
    "institution_name": "SelfLearner",
    "degree": "Bachelor",
    "field_of_study" : "DevOps",
    "end_date": "2023"
}
```

* Response body :
```
{
    "id": int,
    "institution_name": "selflearner",
    "degree": "bachelor",
    "field_of_study": "devops",
    "end_date": "2023",
    "created_at": "2023-07-01T13:11:02.000Z",
    "updated_at": "2023-07-01T13:11:02.000Z",
    "user_id": from_jwt
}
```

### Experience info route:

* Post body request on => http://localhost:3000/user/xp

```
{
    "company_name": "SAR",
    "job_title": "Electrical Engineer",
    "description": "No description",
    "start_date": "2020-05",
    "end_date": "2021-01",
    "location": "Jeddah"
}
```

* Response body :
```
{
    "id": int,
    "company_name": "sar",
    "job_title": "electrical engineer",
    "description": "no description",
    "start_date": "2020-05",
    "end_date": "2021-01",
    "location": "jeddah",
    "created_at": "2023-07-01T13:15:38.000Z",
    "updated_at": "2023-07-01T13:15:38.000Z",
    "user_id": from_jwt
}
```

* Put body request on => http://localhost:3000/user/xp/:id

```
{
    "company_name": "SAR",
    "job_title": "Electrical Engineer",
    "description": "No description",
    "start_date": "2020-05",
    "end_date": "2021-01",
    "location": "Jeddah"
}
```

* Response body :
```
{
    "id": int,
    "company_name": "sar",
    "job_title": "electrical engineer",
    "description": "no description",
    "start_date": "2020-05",
    "end_date": "2021-01",
    "location": "jeddah",
    "created_at": "2023-07-01T13:15:38.000Z",
    "updated_at": "2023-07-01T13:15:38.000Z",
    "user_id": from_jwt
}
```

* Get route on :


http://localhost:3000/user/xp/:id

* single experience :

```
{
    "id": int,
    "company_name": "sar",
    "job_title": "electrical engineer",
    "description": "no description",
    "start_date": "2020-05",
    "end_date": "2021-01",
    "location": "jeddah",
    "created_at": "2023-07-01T13:15:38.000Z",
    "updated_at": "2023-07-01T13:17:15.000Z",
    "user_id": from_jwt
}

```

* In case he has multi experiences can get from :

http://localhost:3000/user/xp 


* response collected in array:
```

[
    {
        "id": int,
        "company_name": "sar",
        "job_title": "electrical engineer",
        "description": "no description",
        "start_date": "2020-05",
        "end_date": "2021-01",
        "location": "jeddah",
        "created_at": "2023-07-01T13:15:38.000Z",
        "updated_at": "2023-07-01T13:17:15.000Z",
        "user_id": from_jwt
    }
]

```

### Skill info route:

* Post body request on => http://localhost:3000/user/skill

```
{
    "name":"skill_name"
}
```

* Response body :
```
{
    "id": int,
    "name": "skill_name",
    "created_at": "2023-07-01T13:50:14.000Z",
    "updated_at": "2023-07-01T13:50:14.000Z",
    "user_id": from_jwt
}
```

* Put body request on => http://localhost:3000/user/skill/:id

```
{
    "name":"javascript"
}
```

* Response body :
```
{
    "id": int,
    "name": "javascript",
    "created_at": "2023-07-01T13:50:14.000Z",
    "updated_at": "2023-07-01T13:51:11.000Z",
    "user_id": from_jwt
}
```

* Get route on :


http://localhost:3000/user/skill/:id

* single skill :

```
{
    "id": int,
    "name": "javascript",
    "created_at": "2023-07-01T13:50:14.000Z",
    "updated_at": "2023-07-01T13:51:11.000Z",
    "user_id": from_jwt
}
```

* In case he has multi skills can get from :

http://localhost:3000/user/skill


* response collected in array:

```
[
    {
        "id": int,
        "name": "kubernetes",
        "created_at": "2023-07-01T13:47:37.000Z",
        "updated_at": "2023-07-01T13:47:37.000Z",
        "user_id": from_jwt
    }
]
```

### Skill info route:

* Post body request on => http://localhost:3000/user/project

```
{
    "name":"cv-creation",
    "description":"cv-creation app to make it easy managing cv"
}
```

* Response body :
```
{
    "id": int,
    "name": "cv-creation",
    "description": "cv-creation app to make it easy managing cv",
    "created_at": "2023-07-01T13:54:37.000Z",
    "updated_at": "2023-07-01T13:54:37.000Z",
    "user_id": from_jwt
}
```

* Put body request on => http://localhost:3000/user/project/:id

```
{
    "name":"cv-creation",
    "description":"edited cv-creation app to make it easy managing cv"
}
```

* Response body :
```
{
    "id": int,
    "name": "cv-creation",
    "description": "edited cv-creation app to make it easy managing cv",
    "created_at": "2023-07-01T13:54:37.000Z",
    "updated_at": "2023-07-01T13:55:56.000Z",
    "user_id": from_jwt
}
```

* Get route on :


http://localhost:3000/user/project/:id

* single skill :

```
{
    "id": int,
    "name": "cv-creation",
    "description": "edited cv-creation app to make it easy managing cv",
    "created_at": "2023-07-01T13:54:37.000Z",
    "updated_at": "2023-07-01T13:55:56.000Z",
    "user_id": from_jwt
}
```

* In case he has multi skills can get from :

http://localhost:3000/user/project


* response collected in array:

```
[
    {
        "id": int,
        "name": "cv-creation",
        "description": "edited cv-creation app to make it easy managing cv",
        "created_at": "2023-07-01T13:54:37.000Z",
        "updated_at": "2023-07-01T13:55:56.000Z",
        "user_id": from_jwt
    }
]
```
