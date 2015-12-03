var connection;
exports.setup = function (conn) {
    //save connection
    connection = conn;
};

exports.addProject = function (task, callback) {
    connection.query("INSERT INTO projects (name, site, description) VALUES (?, ?, ?)", [task.name, task.site, task.description], callback);
};

exports.updateProject = function (id, task, callback) {
    var sql = "UPDATE projects SET name='" + task.name
        + "', site='" + task.site
        + "', description='" + task.description
        + "' WHERE id=" + id;

    connection.query(sql, callback);
};

exports.getProjects = function (callback) {
    connection.query("SELECT * FROM projects", callback);
};

exports.getProject = function (id, callback) {
    connection.query("SELECT * FROM projects WHERE id=" + id, callback);
};

exports.deleteProject = function (id, callback) {
    connection.query("DELETE FROM projects WHERE id=" + id, callback);
};