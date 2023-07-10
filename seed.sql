USE business_db;

INSERT INTO departments (department_name)
VALUES 
    ('sales'),
    ('engineering');

INSERT INTO roles (title,salary, department_id)
VALUES
    ('engineering', '80000',1),
    ('sales', '70000',2);