CREATE DATABASE COLLEGE;
CREATE database XYZ_COMPANY;

DROP database xyz_company;
USE COLLEGE;

CREATE TABLE STUDENT(
ROLLNO INT,
NAME VARCHAR(30),
AGE INT
);

INSERT INTO STUDENT(ROLLNO, NAME, AGE)
VALUES
(101, "ADAM", 12),
(102, "BOB", 14);

SELECT * FROM STUDENT;

CREATE DATABASE IF NOT EXISTS instagram;
DROP DATABASE IF EXISTS INSTAGRAM;

SHOW DATABASES;
USE COLLEGE;
SHOW tables;

CREATE DATABASE IF NOT exists INSTAGRAM;
USE INSTAGRAM;

CREATE TABLE USER(
id int,
age int,
name varchar(30) not null,
email varchar(50) unique,
followers int default 0,
following int,
constraint age_check check (age>=13),
primary key(id)
);

insert into user
(id, age, name, email, followers, following)
values
(1, 15,"adam", "adam@yahoo.in",123, 145),
(2, 15, "bob","bob123@gmail.com", 200, 200),
(3, 16, "casey","casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO user
(id, age, name, email)
VALUES
(112, 13,"random","bob123@gmail.com");

create table post(
id int primary key,
content varchar(50),
user_id int,
foreign key(user_id) references user(id)
);

insert into post(id, content, user_id)
values
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);

select id, name, age from user;
select * from user;
select distinct age from user;

select content from post;
select distinct user_id from post;

select name, followers
from user
where followers>=200;

select name, age
from user
where age+1=18;

select name, age, followers
from user
where age > 15 and followers>200;

select name, age, followers
from user
where age > 15 OR followers>200;

select name, age
from user
where age between 16 and 17;

SELECT name,followers, email
FROM user
WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);

select name, email, age
from user
where age in (14, 16);

select name, email, age
from user
where age not in (14, 16);

select * from user
limit 3;

select name, email, followers
from user
order by followers asc;

select max(followers)
from user;

select count(age)
from user
where age>14;

select avg(followers)
from user;

select sum(followers)
from user;

select min(followers)
from user
where age<15;

select age, count(id)
from user
group by age;

select age, max(followers)
from user
group by age;

select age, max(followers)
from user
group by age
having max(followers)>200;

select age, max(followers)
from user
group by age
having max(followers)>200
order by age desc;

set sql_safe_updates = 0;

update user
set followers = 600
where age = 16;

delete from user
where age = 14;

alter table user
add column city varchar(30) default "Delhi";

alter table user
add column temp int default 0;

alter table user
drop column temp;

alter table user
rename to instaUser;

alter table instauser
rename to user;

alter table user
change column id uid int;

alter table user
modify column followers int default 10;

alter table user
modify column following int default 10;

insert into user(uid, age, name, email)
values
(7, 20, "maeve", "maeve@otis.com");

drop table post;
truncate table user;

select * from user;













