# API Documentation

The project's backend is built using [Nest.js](https://nestjs.com/) and [Supabase](https://supabase.com/). 

Nest.js provides a robust framework for scalable server-side applications, leveraging TypeScript. 

**Supabase** is utilized for its real-time database and authentication features. 

Within backend architecture, one of the most important organizational units is the **_"features"_** directory, which houses different functional modules of the application. Each feature typically contains its own set of services, controllers, and other related files that handle specific areas of functionality.

## KPI Feature

**Introduction:**
This module is specifically designed to manage Key Performance Indicators (KPIs). It encompasses services that handle CRUD operations for KPIs, and a controller that interacts with these services to provide endpoints.

### Services: kpi.service.ts

Dependencies:
DbConnectionService: A service presumably providing database connections and functionalities.

**_Key Methods:_**

| ***Metod*** | ***Description*** |
|-------------| --- |
| createKpi() | Creates a new KPI in the system. It accepts data of type KpiCreationDto and returns the status of the operation, KPI ID if successful, or an error. |
| fetchKpis() | Retrieves KPI details based on a user's ID and type (either 'gatekeeper' or 'economist'). Different RPC methods are called based on the user type. |
| getKpiDetailsWithConstraints() | Fetches detailed information and constraints of a KPI using its ID. |
| addKpiValue() | Adds a value to a KPI. This method requires the KPI ID, user ID, and a DTO containing the value to be added. |

### Controller: kpi.controller.ts

**_Endpoints:_**

| ***Metod*** | ***Resource*** | ***Description*** |
|-------------| ------------- |-------------------|
| PUT | /kpi/create | Endpoint to create a new KPI. It expects the KPI data in the request body. |
| GET | /kpi/gatekeeper-list | Fetches KPIs related to the 'gatekeeper' user. Optionally accepts a gatekeeperId query parameter. |
| GET | /kpi/economist-list | Fetches KPIs for the 'economist' user. Optionally accepts an economistId query parameter. |
| GET | /kpi/:id | Retrieves a single KPI's details based on its ID. |
| GET | /kpi/:id/constraints | Fetches a KPI's details and its constraints based on the KPI ID. |
| PUT | /kpi/:id/add-value | Adds a value to a specific KPI. Requires userId as a query parameter and the value data in the request body. |

### Module: kpi.module.ts
This is a NestJS module file, responsible for bootstrapping the KPI feature. It imports the required services and controllers specifically related to KPIs.
