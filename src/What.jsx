const What=(props)=>{
    const content=props.wht;
    return(
        <>
 <div className="container">

            {
                content.map(function(a){
                    return(

                        <div className="row align-items-center">
                          <div className="col-12 col-md-6">
                            <img src={a.img} alt="" className="img-fluid" />
                          </div>
                          <div className="we col-12 col-md-6 text-center">
                            <h2 className="p-3" style={{fontSize:"35px",fontWeight:800}}>{a.head}</h2>
                            <p className="p-3" style={{fontSize:"18px"}}>{a.cont}</p>
                            <p className="read">{a.red}</p>
                          </div>
                        </div>
                    )
                })
            }
</div>

     

        </>
    )


}

export default What;