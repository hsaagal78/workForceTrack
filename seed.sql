USE business_db;

INSERT INTO departments (department_name)
VALUES 
    ('Human Resources'),
    ('Payroll Management'),
    ('Employee Relations'),
    ('Talent Acquisition'),
    ('Development'),
    ('Benefits'),
    ('Health'),
    ('Labor Relations'),
    ('Compliance'),
    ('Employee Engagement');





INSERT INTO roles (title,salary, department_id)
VALUES
	('HR Manager', '70000',1),
    ('HR Business Partner', '80000',1),
    ('HR Generalist', '55000',1 ),
    ('Payroll Manager','60000',2),
    ('Payroll Specialist', '550000',2),
    ('Payroll Administrator','76000',2),
    ('Employee Relations Manager','60000',3),
    ('Employee Relations Specialist', '550000',3),
    ('Employee Relations Coordinator','76000',3),
    ('Recruitment Manager','60000',4),
    ('Talent Acquisition Specialist', '550000',4),
    ('Talent Acquisition Consultant','76000',4),
    ('Training Coordinator','60000',5),
    ('Training Facilitator', '550000',5),
    ('Instructional Designer','76000',5),
    ('Benefits Specialist','60000',6),
    ('Compensation Analyst', '550000',6),
    ('Total Rewards Coordinato','76000',6),
    ('Safety Coordinator','60000',7),
    ('Occupational Health Specialist', '550000',7),
    ('Safety Inspector','76000',7),
    ('Labor Relations Manager','60000',8),
    ('Labor Relations Specialist', '550000',8),
    ('Employee Advocater','76000',8),
    ('Compliance Manager','60000',9),
    ('Compliance Analyst', '550000',9),
    ('Ethics ','76000',9),
    ('Compliance Manager','60000',10),
    ('Compliance Analyst', '550000',10),
    ('Compliance Coordinator','76000',10);
    

    
INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES
	('John', 'Smith', 2, 1),
    ('Tom', 'Douglas', 10, null),
    ('Emily', 'Johnson', 3, 2),
    ('Michael', 'Davis', 8, null),   
    ('Jessica', 'Wilson', 2, 1),
    ('David', 'Thompson', 3, 2),
    ('Sarah', 'Anderson', 4, null),
    ('Christopher', 'Brown', 2, 1),
    ('Jennifer', 'Martin', 3, 2),
    ('Matthew', 'Taylor', 1, null),
    ('Elizabeth', 'Clark', 2, 1),
    ('Daniel', 'Miller', 6, 1),
    ('Laura', 'Lewis', 1, 1),
    ('Andrew', 'Harris', 6, 1),
    ('Olivia', 'Jackson', 3, 1),
    ('William', 'Moore', 3, null),
    ('Ava', 'Lee', 4, 1),
    ('Ryan', 'White', 3, 2),
    ('Grace', 'Walker', 5, null),
    ('Benjamin', 'Young', 2, 1);


