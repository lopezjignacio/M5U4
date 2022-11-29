var pool = require('./bd');

//para ver las novedades
async function getNovedades() {
	var query ="select * from novedades order by id desc";
	var rows = await pool.query(query);
	return rows;
}

//para insertar novedades
async function insertNovedad(obj){
	try{
		var query = "insert into novedades set ? ";
		var rows = await pool.query(query, [obj]);
		return rows;
	}catch (error){
		console.log(error);
		throw error;
	} //cierra catch
	} //cierra insertNovedad

//para eliminar novedades
async function deleteNovedadById(id){
	var query = "delete from novedades where id = ? ";
	var rows = await pool.query(query, [id]);
	return rows;
}

//para llamar la novedad a modificar
async function getNovedadById(id){
	var query = "select * from novedades where id = ? ";
	var rows = await pool.query(query, [id]);
	return rows[0];
}

//para modificar las novedades
async function modificarNovedadById(obj, id){
	try{
		var query = "update novedades set ? where id=?";
		var rows = await pool.query(query, [obj, id]);
		return rows;
}catch (error){
	throw error;
}
}

module.exports = {getNovedades, deleteNovedadById, insertNovedad, getNovedadById, modificarNovedadById}