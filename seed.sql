USE business_db;

INSERT INTO departments (department_name)
VALUES 
    ('sales'),
    ('engineering');

INSERT INTO roles (title,salary, department_id)
VALUES
	('sales', '70000',1),
    ('engineering', '80000',2);
    
INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES
	('Jhon','Smith',2, 1),
    ('Tom','Doglas',1, null);
