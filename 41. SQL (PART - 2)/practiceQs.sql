create database if not exists university;

use university;

create table teacher(
id int primary key,
name varchar(30) not null,
subject varchar(30) not null,
salary int
);

insert into teacher(id, name, subject, salary)
values
(23, "ajay", "math", 50000),
(47, "bharatii", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

select * from teacher
where salary > 55000;

alter table teacher
change column salary ctc int;

update teacher
set ctc = ctc*1.25;

alter table teacher
add column city varchar(30) default "Gurgaon";

alter table teacher
drop column ctc;

select * from teacher;

create table studentInfo(
roll_no int primary key,
name varchar(30) not null,
city varchar(30) default "delhi",
marks int
);

insert into studentInfo(roll_no, name, city, marks)
values
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

update studentInfo
set name = "bobby"
where roll_no = 108;

select * from studentInfo
where marks>75;

select distinct city from studentInfo;

select city from studentInfo
group by city;

select city, max(marks) from studentInfo
group by city;

select avg(marks) from studentInfo;

alter table studentInfo
add column grade varchar(10);

update studentInfo
set grade = "0"
where marks>=80;

update studentInfo
set grade = "A"
where marks >= 70 and marks < 80;

update studentInfo
set grade = "B"
where marks >= 60 and marks < 70;

select * from studentInfo;





