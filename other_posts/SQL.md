---
title: "SQL statements"
date: "2023-10-11"
---

# Operate database

### 1.create database

`CREATE DATABASE [IF NOT EXISTS] database_name;`

### 2.delete database

`DROP DATABASE [IF EXISTS] database_name;`

### 3.use database

`USE database_name;`

### 4.check current database and databases

```sql
SELECT DATABASE();
SHOW DATABASES;
```

### 5.check create database

`SHOW CREATE DATABASE database_name`

# Operate table

### 1.create table

```sql
CREATE TABLE [IF NOT EXISTS] `table_name` (
  `id` INT(10) NOT NULL AUTO_INCREMENT COMMENT 'comment for id field',
  `name` VARCHAR(20) NOT NULL DEFAULT 'default name' COMMENT 'comment for name field',
  `birthday` DATETIME DEFAULT NULL COMMENT 'comment for birthday field',
  ...,
  PRIMARY KEY(`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
```

### 2.alter table

  rename: `ALTER TABLE table_name RENAME AS new_table_name;`

  add field: `ALTER TABLE name ADD field_name FIELD_PROPERTY;`

  alter field:

  ```sql
      ALTER TABLE name MODIFY field_name FIELD_PROPERTY;
      ALTER TABLE name CHANGE field_name new_field_name FIELD_PROPERTY;
     ALTER TABLE name AUTO_INCREMENT = 100;
  ```

  delete field: `ALTER TABLE table_name DROP field_name;`

### 3.delete table

`DROP TABLE [IF EXISTS] table_name;`

### 4.check table and tables

  ```sql
      DESC[RIBE] [TABLE] table_name;
      SHOW TABLES;
  ```

### 5.check create table

`SHOW CREATE table_name;`

# Foreign key

### 1.add foreign key constraint while creating table

```sql
CREATE TABLE [IF NOT EXISTS] `students` (
  `id` INT(10) NOT NULL AUTO_INCREMENT COMMENT 'comment for id field',
  `name` VARCHAR(20) NOT NULL DEFAULT 'default name' COMMENT 'comment for name field',
  `birthday` DATETIME DEFAULT NULL COMMENT 'comment for birthday field',
  ...,
  `gradeid` INT(10) NOT NULL COMMENT 'comment for gradeid field',
  PRIMARY KEY(`id`),
  [KEY|INDEX] `FK_gradeid`(`gradeid`),
  [CONSTRAINT `FK_gradeid`] FOREIGN KEY(`gradeid`) REFERENCES `grades`(`gradeid`)
  [ON UPDATE CASCADE][ON DELETE CASCADE]
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE [IF NOT EXISTS] `grades` (
  `gradeid` INT(10) NOT NULL AUTO_INCREMENT COMMENT 'comment for gradeid field',
  `name` VARCHAR(10) NOT NULL DEFAULT 'grade 1' COMMENT 'comment for grade name field',
  ...,
  PRIMARY KEY(`gradeid`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
```

### 2.add foreign key constraint after create

```sql
ALTER TABLE students ADD CONSTRAINT `FK_gradeid` FOREIGN KEY(`gradeid`) REFERENCES`grades`(`gradeid`);
```

### 3.delete foreign key

 `ALTER TABLE students DROP FOREIGN KEY FK_gradeid;`

### 4.insert record to students

`INSERT INTO students (field_name,...) VALUES ROW(...,...,......),[ROW(...,...,......),...,......];`

# Load data for table

### 1.from .txt file

`LOAD DATA LOCAL INFILE 'file_path' INTO TABLE table_name [LINES TERMINATED BY ['\r'|'\r\n']];`

### 2.insert/update/delete delete record

```sql
  INSERT INTO table_name VALUES (...,...,......)[,(...,...,......),(...,...,......),......];[^1]
  UPDATE table_name SET field_name='...' WHERE condition;
  DELETE FROM table_name WHERE condition;
```

# Query

### 1.query all

`SELECT * FROM table_name [LIMIT number];`

### 2.query particular row or rows

`SELECT * FROM table_name WHERE [column_name[=|>|>=|<|<=|<>]'...'|column_name IS [NOT] NULL|column_name [LIKE|NOT LIKE] '...'|column_name REGEXP_LIKE(name, 'regular_expression');] [AND|OR condition_statement];`

### 3.query particular column or columns

`SELECT column_name [AS alias_name][,...,...,......] FROM table_name;`

### 4.query combine row selection and column selection

`SELECT column_name[,...,...,......] FROM table_name WHERE condition_statement;`

### 5.query with sorting rows

`SELECT column_name[,...,...,......] FROM table_name ORDER BY column_name [DESC][,...,...,......];`

### 6.count rows

`SELECT column_name[,...,...,......], COUNT(*) FROM table_name [WHERE condition] GROUP BY column_name[,...,...,......];`

### 7.using multiple tables

`SELECT [table_name1|short_table_name1].column_name[,...,...,......] FORM table_name1 [[AS] short_table_name1] INNER JOIN table_name2 [[AS] short_table_name2] ON [table_name1|short_table_name1].column_name1=[table_name2|short_table_name2].column_name1 [AND ...] [WHERE condition];`

# Others

### 1.show index

`SHOW INDEX FROM table_name;`

### 2.show warnings

`SHOW WARNINGS;`
