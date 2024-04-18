import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../Assests/em.png'
import saa from '../Assests/saa.png'
import fb from '../Assests/fb.png'
import lg from '../Assests/lg.png'

function Footer() {
    return (
        <>
            {/* Large screen */}
            <div style={{ overflowX: 'hidden' }} class="d-none d-lg-block d-none">

                <Row style={{ backgroundColor: '#7bc64a' }} className=' pt-4'>
                <Col lg={3} className='ps-5'>
                <h3 style={{ color: 'white' }}>Kontakt</h3>
                <p style={{ color: 'white',marginTop: '15px'  }}>Egestam Mattsson El & Data AB</p>
                <p style={{ color: 'white'  }}>Ridspögatan 15a</p>
                <p style={{ color: 'white', marginBottom: '25px' }}>213 77 Malmö</p>
               <p style={{ color: 'white', }}>Tel: 040-6170166</p>
                <p style={{ color: 'white', marginBottom: '25px' }}>E-post:  info@emeldata.se</p>
               <p style={{ color: 'white',  }}>Integritespolicy</p>
               </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h3 style={{ visibility: 'hidden' }}>categories</h3>
                        <h3 style={{  color: 'white', fontSize: '17px',marginTop: '5px' }}>Meny</h3>
                        <p style={{ color: 'white',marginTop: '5px' }}>Hem</p>
                        <p style={{ color: 'white' }}>Hȧllbarhet</p>
                        <p style={{ color: 'white' }}>Tjänter</p>
                        <p style={{ color: 'white' }}>Kontakta oss</p>
                        <p style={{ color: 'white' }}>Jobba med oss</p>


                    </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h3 style={{ visibility: 'hidden' }}>categories</h3>
                        <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Din integritet</p>
                        <p style={{ color: 'white' }}>Integritetspolicy</p>
                        <p style={{ color: 'white' }}>Cookiepolicy</p>
                        <div className='d-flex'>
                            {/* <i style={{ color: 'white' }} class="fa-brands fa-facebook fs-4"></i> */}
                            <img style={{ width: '32px',height:'32px',top:'117px',left:'204px', marginRight: '5px' }} src={fb} alt="fb" />
                            <p style={{ color: 'white', paddingLeft: '2%',marginTop:'1%' }}>Facebook</p>
                        </div>

                    </Col>
                    <Col lg={3} className='d-flex flex-column'>
                        <h3 style={{ color: 'white' }}>Gasellvinnare</h3>
                        <img width={'200px'} height={'100px'} src={saa} alt="gasell" />
                        <p style={{ color: 'white' }}>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>


                    </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h4 style={{ visibility: 'hidden' }}>categories</h4>
                        <img width={'164px'} height={'104px'} top={'146px'} left={'1175px'} className='d-flex pt-3' src={lg} alt="" />

                    </Col>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                    <hr className='text-white w-100 '  />                                
                       <p className='text-center text-white mt-3'>Copyright &#169; 2024 All rights reserved.</p>
                    </div>
                </Row>

            </div>
            {/* Medium Screen */}
            <div style={{ overflowX: 'hidden' }} className="d-none d-md-block d-lg-none">
                <Row className='ps-4' style={{ backgroundColor: '#7bc64a', paddingTop: '100px' }}>
                    <Col md={6}>
                        <Row>
                            <h3 style={{ color: 'white' }}>Kontakt</h3>
                            <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                                <p>Egestam Mattsson El & Data AB</p>
                                <p>Ridspögatan 15a</p>
                                213 77 Malmö
                            </div>
                            <br />

                            <div style={{ lineHeight: '0.5', color: 'white' }}>
                                <p className='mt-4'>Tel: 040-6170166</p>
                                <p>E-post: info@emeldata.se</p>
                            </div>

                        </Row>
                        <hr className='text-white' style={{ position: 'absolute', left: 0, width: '50%' }} />
                        <Row className='mt-4'>
                            <Col md={6}>
                                <h3 style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</h3>
                                <div style={{ color: 'white' }} >
                                <p>Vårt erbjudande</p>
                                <p>Hållbarhet</p>
                                <p>Jobba hos oss</p>
                                <p>Om oss</p>
                                <p>Kontakta oss</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Din integritet</p>
                                <div style={{ color: 'white' }} >
                                    <p>Integritetspolicy</p>
                                    <p>Cookiepolicy</p>
                                    <div style={{ paddingTop: '2px', marginBottom: '20px',marginTop:'-2%' }}>  <i style={{ color: 'white' }} className="fa-brands fa-facebook fs-2"></i>
                                    <div style={{ marginLeft: '40px' }}>
    <p style={{ color: '#FFFFFF', marginBottom: '10px',marginTop:'-12%',marginLeft:'1%', font:'Inter',size:'16px' }}>Facebook
    </p>
  </div></div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <img width={'150px'} height={'100px'} className='d-flex pt-3' src={logo} alt="" />
                    </Col>
                </Row>
            </div>
            {/* Small screen */}
            <div style={{ overflowX: 'hidden' }} className='d-none d-sm-block d-md-none'>
                <Row className='pt-3 ' style={{ backgroundColor: '#7bc64a' }}>


                    <Row className='ps-5' >
                        <img style={{width:'200px' , height:'100px'}} src={logo} alt="" />
                        <h3 style={{ color: 'white', paddingTop: '20px' }}>Kontakt</h3>
                        <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                            <p>Egestam Mattsson El & Data AB</p>
                            <p>Ridspögatan 15a</p>
                            213 77 Malmö
                        </div>
                        <br />

                        <div style={{ lineHeight: '0.5', color: 'white' }}>
                            <p className='mt-4'>Tel: 040-6170166</p>
                            <p>E-post:  info@emeldata.se</p>
                        </div>
                    </Row>
                    <hr className='text-white ' style={{ width: '87%', marginRight: '25%' }} />
                    <Row className='ps-5'>
                        <Col xs={6}>
                            <h3 style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</h3>
                            <div style={{ color: 'white' }} >
                                <p>Vårt erbjudande</p>
                                <p>Hållbarhet</p>
                                <p>Jobba hos oss</p>
                                <p>Om oss</p>
                                <p>Kontakta oss</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Din integritet</p>
                            <div style={{ color: 'white' }} >
                                <p>Integritetspolicy</p>
                                <p>Cookiepolicy</p>
                                <div className='d-flex'>
                                    <i style={{ color: 'white' }} class="fa-brands fa-facebook fs-4"></i>
                                    <p style={{ color: 'white', paddingLeft: '10px' }}>Facebook</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Row>


            </div>
            {/* Extra Small screen */}
            <div style={{ overflowX: 'hidden' }} className='d-block d-sm-none'>
                <Row className='pt-3 ' style={{ backgroundColor: '#7bc64a' }}>


                    <Row className='ps-5' >
                        <img style={{width:'200px' , height:'100px'}} src={logo} alt="" />
                        <h3 style={{ color: 'white', paddingTop: '20px' }}>Kontakt</h3>
                        <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                            <p>Egestam Mattsson El & Data AB</p>
                            <p>Ridspögatan 15a</p>
                            213 77 Malmö
                        </div>
                        <br />

                        <div style={{ lineHeight: '0.5', color: 'white' }}>
                            <p className='mt-4'>Tel: 040-6170166</p>
                            <p>E-post:  info@emeldata.se</p>
                        </div>
                    </Row>
                    <hr className='text-white ' style={{ width: '87%', marginRight: '25%' }}  />
                    <Row className='ps-5'>
                        <Col xs={6}>
                            <h3 style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</h3>
                            <div style={{ color: 'white' }} >
                            <p>Vårt erbjudande</p>
                                <p>Hållbarhet</p>
                                <p>Jobba hos oss</p>
                                <p>Om oss</p>
                                <p>Kontakta oss</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Din integritet</p>
                            <div style={{ color: 'white' }} >
                                <p>Integritetspolicy</p>
                                <p>Cookiepolicy</p>
                                <div className='d-flex'>
                                    <i style={{ color: 'white' }} class="fa-brands fa-facebook fs-4"></i>
                                    <p style={{ color: 'white', paddingLeft: '10px' }}>Facebook</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Row>


            </div>
        </>


    )
}

export default Footer