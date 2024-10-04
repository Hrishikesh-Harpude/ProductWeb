const Home=(props)=>{
    const hommee=props.homi;

    return(
        <>
            <div className="container-fluid homes">
                {
                    hommee.map(function(hom){
                        return(
                            <div className="row">
                                <div className="col-12 text-center" style={{ backgroundImage: `url(${hom.imm})`, }}>
                                    <h5 className="pt-5 pb-3" style={{fontSize: "30px"}}>{hom.ttl}</h5>
                                    <h1 className="pb-3" style={{fontSize: "55px"}}>{hom.ttl1}</h1>
                                    <p style={{fontSize: "20px"}}>{hom.par}</p>
                                    <p className="cntc">{hom.cont}</p>
                                </div>
                             </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Home;