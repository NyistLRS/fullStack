 export async function login(ctx, next) {
	console.log('11')
	await next();
	var inserSQL = $sql.user.add,
		code,
		params = ctx.request.body;
	await conn.query(inserSQL, [params.name, params.psw], (err, res) => {
		if(err) {
		}
		if(res) {
		}
	})
}