
module.exports = (mensagem = "Internal Server Error", status = 500, tracer = []) => {

    tracer = tracer.map(err =>  { 
        return { mensagem: err.message, tipo: err.type }
    });

    return { mensagem, status, tracer }
}