# Database Documentation

1. [ER-Diagram](#1-er-diagram)
    - [1.1 Introduction](#11-introduction)
    - [1.2 Development Process](#12-development-process)
    - [1.3 Storyline](#13-storyline)
2. [Data Definition Language](#2-data-definition-language)
    - [2.1 Special Data Types](#21-special-data-types)
    - [2.2 Tables](#22-tables)
3. [SQL Script for populating database](#3-sql-script-for-populating-database)
    - [3.1 Introduction](#31-introduction)
    - [3.2 Block Description](#32-block-description)
        - [Block 1: Inserting users into the users table.](#block-1--inserting-users-into-the-users-table)
        - [Block 2: Inserting a circle into the circle table.](#block-2--inserting-a-circle-into-the-circle-table)
        - [Block 3: Associating an Economist user with a circle in the belongs_to table.](#block-3--associating-an-economist-user-with-a-circle-in-the-belongsto-table)
        - [Block 4: Inserting unit constraints into the unit_constraints table.](#block-4--inserting-unit-constraints-into-the-unitconstraints-table)
        - [Block 5: Inserting KPIs into the kpi table.](#block-5--inserting-kpis-into-the-kpi-table)
        - [Block 6: Inserting KPI values into the fills_in table.](#block-6--inserting-kpi-values-into-the-fillsin-table)
        - [Block 7: Inserting target values for each KPI into the target table.](#block-7--inserting-target-values-for-each-kpi-into-the-target-table)
4. [Scenarios](#4-scenarios)

## 1. ER-Diagram

## 1.1 Introduction

The purpose of the ER diagram is to provide a graphical representation of the database. The ER diagram provides a clear visual representation of the layout of the database.

The development of the ER diagram helped in specifying the logical structure of the database and ensuring all constraints are kept into place. It aided in understanding how the data is interrelated and how the relationships should be defined. Moreover, the ER diagram helped in the normalization process by giving a clear overview on whether the data is organized most efficiently.

In essence, in this project the ER diagram functioned as a roadmap for creating databases and ensuring that data is stored efficiently and accurately, and that the user needs are met.

![ER Diagram](/docs/assets/erdiagram.png)

## 1.2 Development Process

**Requirement Gathering**

The requirements for the database were gathered through meetings with the PO of the Pro Juventute project Martin. Additionally, the Miro board stating the requirements for the project was consulted for further requirements.

**Entities Identification**

| ***Entity*** | ***Description*** |
| --- | --- |
| User | _Purpose:_ store the users of the Web App. |
|      | _Attributes:_ ID ( **PK** ), Name, Email, Role, UpdatedBy, UpdatedOn. |
|      |_Notes:_ The 'role' attribute can only take a fixed value [ECONOMIST, GATEKEEPER, ADMIN, GUEST]. |
| Circle | _Purpose:_ store the circles of Pro Juventute. |
|      |_Attributes:_ ID ( **PK** ), Name, UpdatedBy, UpdatedOn. |
| KPI | _Purpose:_ store the kpi's that are being tracked within Pro Juventute. |
|     | _Attributes:_ ID ( **PK** ), Name, Description, Periodicity, Unit, GatekeeperID, UpdatedBy, UpdatedOn, ArchivedAt, ClosedAt. |
|     | _Notes:_ the 'periodicity' variable can only take a fixed value [HOURLY, DAILY, MONTHLY, QUARTERLY, YEARLY]. The 'gatekeeperID' attribute comes from the 'id' in the 'user  table. |
| UnitConstraints | _Purpose:_ store the units a kpi can have. |
|     | _Attributes:_ Name ( **PK** ), Min, Max, UpdatedBy, UpdatedOn. |

**Relationship Identification**

| ***Relationships*** | ***Description*** |
| --- | --- |
| Belongs to | _Purpose:_ to show that a user belongs to a circle. | 
|     | _Relationship:_ A user can belong to zero or more circles (0:M) and a circle can have zero or more users linked to it (conomists, gatekeeper) (0:M). |
|     | _Derived entity:_ it should be documented which user belongs to which circle at which point in time, as well as who appointed a user to a circle, so this will be documented in the Belongs To table - a relationship that developed into a table. |
| Creates | _Purpose:_ to show that a user creates a KPI. |
|     | _Relationship:_ A user can create zero or more KPIs (i.e., only gatekeepers create KPIs) (0:M), and a KPI can only be created once by one user (1:1). |
| Tracks | _Purpose:_ to show that circles track their KPIs. |
|     | _Relationship:_ A circle will track zero or more KPIs (0:M), and a KPI can be tracked by zero or more circles (0:M). |
|     | _Derived entity:_ it should be documented that each circle which tracks a certain KPI will set a target. This target will be set once but they do not have to. However, it should be the case that per combination of circle and KPI there can only be one target, so that is why the 'Tracks' relationship developed into a table. |
| Fills In | _Purpose:_ to show that a user which belongs to a circle, will fill in data on the KPIs that the circle is tracking. |
|     | _Relationship:_ Per combination of user and circle, zero or more KPIs can be filled in (0:M). A KPI can be filled in by one or more combinations of user and circle (0:M). |
|     | _Derived entity:_ it should be the case that each combination of user and circle can only fill in data on the same KPI once per period. This value should be stored along with the period to which this value belongs and when it was filled in and by who. This is why the 'fills in' relationship developed into a table. |
| Has | _Purpose:_ to show that a KPI has a certain unit. |
|     | _Relationship:_ A KPI can only have one certain unit (1:1) but a unit can be used by zero or more KPIs (0:M). |

## 1.3 Storyline

The narrative of the ER diagram is as follows:

- A user of the Web Application will be stored in the database.
- The user will have one out of four roles, of which the Economist belongs to a circle, and the Gatekeeper creates KPIs and also belongs to a circle. There will also be an admin and a guest user.
- Once an economist belongs to a circle, it is able to fill in data for the kpi's each period, for the kpi's the circle is tracking. The value it fills in for the kpi has to adhere to the unit constraints of the unit that the KPI is supposed to be in.
- A user which is an economist can belong to multiple circles and is therefore able to fill in kpi values for more than one circle. But he/she can only fill it in once per period per circle.

## 2 Data Definition Language

The DDL was used to refine and manage the structure of the database that has been discussed in the previous section.

## 2.1 Special Data Types

| **Data Types** | **Description** |
| --- | --- |
| ENUM | This datatype is a user-defined type in databases that allows a column to be restricted to a specific set of string values. |
|  | The primary purpose of ENUM is to ensure data integrity by limiting the possible values for a column. |
| SERIAL | This datatype is used to automatically generate a unique integer value for a column. |
|  | It's commonly used for primary key columns where you want the database to auto-increment the value for each new row. |

## 2.2 Tables

| **Tables**               | **Description**                                                                                                         |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|
| public.users             | _PK:_ id                                                                                                                |
|                          | _Variables:_                                                                                                            |
|                          | - id → serial because it needs to be created automatically                                                              |
|                          | - name → varchar to allow for string                                                                                    |
|                          | - email → varchar to allow for string                                                                                   |
|                          | - role → enum to restrict input                                                                                         |
|                          | - status → enum to restrict input                                                                                       |                          
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → varchar to allow for string                                                                             |
| public.circle            | _PK:_ id_FK:_ updated\_by (public.users)                                                                                |
|                          | _Variables:_                                                                                                            |
|                          | - id → serial because it needs to be created automatically                                                              |
|                          | - name → varchar to allow for string                                                                                    |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |
| public.belongs\_to       | _PK:_ (user\_id, circle\_id)_FK:_ user\_id (public.user), circle\_id (public.circle), updated\_by (public.users)        |
|                          | _Variables:_                                                                                                            |
|                          | - user\_id → integer to reference to user                                                                               |
|                          | - circle\_id → integer to reference to circle                                                                           |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |
| public.unit\_constraints | _PK:_ unit_FK:_ updated\_by (public.users)                                                                              |
|                          | _Variables:_                                                                                                            |
|                          | - unit → varchar to allow for string                                                                                    |
|                          | - min → float to allow for decimals                                                                                     |
|                          | - max → to allow for decimals                                                                                           |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |
| public.kpi               | _PK:_ id_FK:_ unit (public.unit\_constraints), gatekeeper\_id (public.users), updated\_by (public.users)                |
|                          | _Variables:_                                                                                                            |
|                          | - id → serial because it needs to be created automatically                                                              |
|                          | - name → varchar to allow for string                                                                                    |
|                          | - description → varchar to allow for text                                                                               |
|                          | - periodicity → enum to restrict input                                                                                  |
|                          | - unit → varchar to reference to unit                                                                                   |
|                          | - gatekeeper\_id → integer to reference to user                                                                         |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |
|                          | - archived\_on → timestamp to log the exact date and time of archive                                                    |
|                          | - closed\_on → timestamp to log the exact date and time of closure                                                      |
| public.fills\_in         | _PK:_ (user\_id, circle\_id, kpi\_id, kpi\_date)_FK:_ (user\_id, circle\_id) respectively (public.users, public.circle) |
|                          | _Variables:_                                                                                                            |
|                          | - user\_id → integer to reference to user                                                                               |
|                          | - circle\_id → integer to reference to circle                                                                           |
|                          | - kpi\_id → integer to reference to kpi                                                                                 |
|                          | - kpi\_date → DATE to register the date for which the value is filled in for                                            |
|                          | - kpi\_value → float                                                                                                    |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |
| public.target            | _PK:_ (circle\_id, kpi\_id)_FK:_ (circle\_id, kpi\_id) respectively (public.circle, public.kpi)                         |
|                          | _Variables:_                                                                                                            |
|                          | - circle\_id → integer to reference to circle                                                                           |
|                          | - kpi\_id → integer to reference to kpi                                                                                 |
|                          | - target → float                                                                                                        |
|                          | - updated\_at → timestamp to log the exact time and date                                                                |
|                          | - updated\_by → integer to reference to user                                                                            |

## 2.3 SQL Script for creating the tables

```
-- Define the ENUM type for role and periodicity
CREATE TYPE public.user_roles AS ENUM ('ECONOMIST', 'GATEKEEPER', 'ADMIN', 'GUEST');
CREATE TYPE public.kpi_periodicity AS ENUM ('HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'YEARLY');
CREATE TYPE public.user_status AS ENUM ('ACTIVE', 'INACTIVE');
CREATE TYPE public.target_unit AS ENUM ('CONSTANT', 'SUM');
```

```
-- Create the user table
CREATE TABLE public.users (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
email VARCHAR NOT NULL,
role user_roles, -- Use the ENUM type here
status user_status, -- Use the ENUM type here
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER NOT NULL
);
```

```
CREATE TABLE public.circle (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id)
);
```

```-- I created the following table to allow circles to change economists over time.
CREATE TABLE public.belongs_to (
user_id INTEGER REFERENCES public.users(id),
circle_id INTEGER REFERENCES public.circle(id),
PRIMARY KEY (user_id, circle_id),
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id)
);
```

```
CREATE TABLE public.unit_constraints (
unit VARCHAR PRIMARY KEY,
min FLOAT NOT NULL, -- if not really constraint we can put infinity or remove NOT NULL so that they do not perse have to fill it in
max FLOAT NOT NULL, -- if not really constraint we can put infinity or remove NOT NULL so that they do not perse have to fill it in
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id)
);
```

```
CREATE TABLE public.kpi (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL UNIQUE,
description VARCHAR NOT NULL,
periodicity kpi_periodicity, -- Use ENUM here
unit VARCHAR REFERENCES public.unit_constraints(unit),
gatekeeper_id INT NOT NULL REFERENCES public.users(id),
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id),
archived_on TIMESTAMP,
closed_on TIMESTAMP
);
```

```
CREATE TABLE public.fills_in (
user_id INTEGER,
circle_id INTEGER,
kpi_id INTEGER REFERENCES public.kpi(id),
kpi_date DATE NOT NULL,
kpi_value FLOAT NOT NULL,
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id),
FOREIGN KEY (user_id, circle_id) REFERENCES public.belongs_to(user_id, circle_id),
PRIMARY KEY (user_id, circle_id, kpi_id, kpi_date)
);
```

```
CREATE TABLE public.target (
circle_id INTEGER REFERENCES public.circle(id),
kpi_id INTEGER REFERENCES public.kpi(id),
target FLOAT, -- for now they can leave target empty if they do not have one
target_year INTEGER,
target_type target_unit,
PRIMARY KEY (circle_id, kpi_id, target_year, updated_at),
updated_at TIMESTAMP NOT NULL,
updated_by INTEGER REFERENCES public.users(id)
);
```

## 3 SQL Script for populating database

## 3.1 Introduction

The purpose of this SQL script was to populate the database with some fake data. This way we could continue developing the frontend and backend and figure out how to retrieve data from the data and display it in our application.

## 3.2 Block Description

### Block 1: Inserting users into the users table.

**Tables Affected:** public.users

**Logic Behind Data:** Creating three distinct users with different roles: Admin, Economist, and Gatekeeper. The updated\_by column for all users is set to '1', assuming the Admin user is the one updating the records.

**Dependencies:** None.

```
-- Inserting users
INSERT INTO public.users (name, email, role, updated_at, updated_by, status)
VALUES
('Dasa Vasilova', 'admin@example.com', 'ADMIN', NOW(), 1, 'ACTIVE'),
('Abdelaziz Maalej', 'economist1@example.com', 'ECONOMIST', NOW(), 1, 'ACTIVE'),
('Bianca Mainella', 'gatekeeper1@example.com', 'GATEKEEPER', NOW(), 1, 'ACTIVE'),
('Daria Onishchuk', 'economist2@example.com', 'ECONOMIST', NOW(), 1, 'ACTIVE'),
('Jiani Wang', 'gatekeeper2@example.com', 'GATEKEEPER', NOW(), 1, 'ACTIVE'),
('Yuliia Kuts', 'economist3@example.com', 'ECONOMIST', NOW(), 1, 'ACTIVE'),
('Neha Shrikant', 'gatekeeper3@example.com', 'GATEKEEPER', NOW(), 1, 'ACTIVE'),
('Marin Mes', 'economist4@example.com', 'ECONOMIST', NOW(), 1, 'ACTIVE');
```

### Block 2: Inserting a circle into the circle table.

**Tables Affected:** public.circle

**Logic Behind Data:** Creating circles named "Circle 1". The updated\_by column is set to the appropriate userid.

**Dependencies:** Depends on the users table for the updated\_by reference.

```
-- Inserting circle
INSERT INTO public.circle (name, updated_at, updated_by)
VALUES
('Circle 1', NOW(), 1), -- Assuming Admin User has ID 1
('Circle 2', NOW(), 1), -- Assuming Admin User has ID 1
('Circle 3', NOW(), 1), -- Assuming Admin User has ID 1
('Circle 4', NOW(), 1); -- Assuming Admin User has ID 1
```

### Block 3: Associating an Economist user with a circle in the belongs\_to table.

**Tables Affected:** public.belongs\_to

**Logic Behind Data:** Associating the Economist user to the circle. The updated\_by column is set to appropriate userid.

**Dependencies:** Depends on the users and circle tables.

```
-- Inserting belongs_to
INSERT INTO public.belongs_to (user_id, circle_id, updated_at, updated_by)
VALUES
(2, 1, NOW(), 1), -- Assuming Economist User has ID 2 and Circle 1 has ID 1
(4, 2, NOW(), 1),
(6, 3, NOW(), 1),
(8, 4, NOW(), 1);
```

### Block 4: Inserting unit constraints into the unit\_constraints table.

**Tables Affected:** public.unit\_constraints

**Logic Behind Data:** Defining three types of units with their respective constraints. The updated\_by column is set to appropriate userid.

**Dependencies:** None.

```
-- Inserting unit_constraints
INSERT INTO public.unit_constraints (unit, min, max, updated_at, updated_by)
VALUES
('Percentage', 0, 100, NOW(), 1),
('Count', 0, 'infinity', NOW(), 1),
('Negative values', '-infinity', 0, NOW(), 1);
```

### Block 5: Inserting KPIs into the kpi table.

**Tables Affected:** public.kpi

**Logic Behind Data:** Creating four distinct KPIs with different periodicities and units. The gatekeeper_id is set to the appropriate userid.

**Dependencies:** Depends on the users and unit\_constraints tables.

```
-- Inserting kpi
INSERT INTO public.kpi (name, description, periodicity, unit, gatekeeper_id, updated_at, updated_by)
VALUES
('KPI 1', 'Description 1', 'MONTHLY', 'Percentage', 3, NOW(), 3),
('KPI 2', 'Description 2', 'YEARLY', 'Percentage', 5, NOW(), 5),
('KPI 3', 'Description 3', 'MONTHLY', 'Count', 5, NOW(), 5) ,
('KPI 4', 'Description 4', 'MONTHLY', 'Negative values', 7, NOW(), 7);
```

### Block 6: Inserting KPI values into the fills\_in table.

**Tables Affected:** public.fills\_in

**Logic Behind Data:** Inserting values for each KPI, with the date/time format depending on the periodicity of the KPI. The updated\_by column is set to the ID of the Economist user, indicating they provided these values.

**Dependencies:** Depends on the users, circle, and kpi tables.

```
-- Inserting fills_in
-- Assuming Economist User has ID 2, Circle 1 has ID 1, and KPIs have IDs 1 to 4
INSERT INTO public.fills_in (user_id, circle_id, kpi_id, kpi_date, kpi_value, updated_at, updated_by)
VALUES
(2, 1, 3, '2023-09-01', 98987, NOW(), 2),
(2, 1, 3, '2023-10-01', 99113, NOW(), 2),
(2, 1, 3, '2023-11-01', 101081, NOW(), 2),
(2, 1, 3, '2023-12-01', 100678, NOW(), 2),
(4, 2, 1, '2023-09-01', 75.1, NOW(), 4),
(4, 2, 1, '2023-10-01', 77.3, NOW(), 4),
(4, 2, 1, '2023-11-01', 77.1, NOW(), 4),
(4, 2, 1, '2023-12-01', 79.8, NOW(), 4),
(6, 3, 4, '2023-09-01', -0.7, NOW(), 6),
(6, 3, 4, '2023-10-01', -2.9, NOW(), 6),
(6, 3, 4, '2023-11-01', -1.5, NOW(), 6),
(6, 3, 4, '2023-12-01', -0.3, NOW(), 6),
(8, 4, 2, '2019-01-01', 67.3, NOW(), 8),
(8, 4, 2, '2020-01-01', 71.9, NOW(), 8),
(8, 4, 2, '2021-01-01', 77.2, NOW(), 8),
(8, 4, 2, '2022-01-01', 84.5, NOW(), 8);
```

### Block 7: Inserting target values for each KPI into the target table.

**Tables Affected:** public.target

**Logic Behind Data:** Setting target values for each KPI, which are logical based on the unit of the KPI. The updated\_by column et to the appropriate userid.

**Dependencies:** Depends on the circle and kpi tables.

```
-- Inserting target
-- Assuming Circle 1 has ID 1 and KPIs have IDs 1 to 4
INSERT INTO public.target (circle_id, kpi_id, target, target_year, target_type, updated_at, updated_by)
VALUES
(1, 3, 53, 2023, 'SUM', NOW(), 2),
(2, 1, 80, 2023, 'CONSTANT', NOW(), 4),
(3, 4, -5, 2023, 'CONSTANT', NOW(), 6),
(4, 2, 88, 2023, 'CONSTANT', NOW(), 8);
```

## 4 Scenarios

- An economist fills in kpi's and the data it fills in needs to end up in the public.fills\_in table.
  - user\_id: id of the economist
  - kpi\_id: id of the KPI
  - target: they can only fill this in if it has not yet been filled in
  - updated\_at: metadata from frontend
  - updated\_by: metadata from frontend
- A gatekeeper creates a kpi and the data it makes should end up in the public.kpi table.
  - id: will generated automatically
  - name: should be filled in by gatekeeper
  - description: should be filled in by gatekeeper
  - periodicity: should be filled in by gatekeeper (fixed value)
  - unit: should be filled in by the gatekeeper (and should be restrained to values defined in public.unit\_constraints)
  - gatekeeper\_id: should come from the user\_id table and is id of the gatekeeper
  - updated\_at: metadata from frontend
  - updated\_by: metadata from frontend
  - archived\_on: metadata from frontend
  - archived\_at: metadata from frontend
- A target is defined by an economist user and this is stored in public.target table
  - circle\_id: should be the id of the circle it belongs to
  - kpi\_id: should be the id of the KPI for which economist is setting a target
  - target: should be filled in by economist
  - updated\_at: metadata from frontend
  - updated\_by: metadata from frontend
- A user is created by Admin user
- A circle is created by Admin user
- A user is linked to circle by Admin user and this linkage is stored in the public.belongs\_to table
- A unit is defined by Admin user and is stored in the public.unit\_constraints table
- Deletion of a record:
  - A row should be removed from public.fills\_in table
- Deletion of a user:
  - Put status to inactive.
