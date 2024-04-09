import React from 'react'
import { Col, Row } from 'react-bootstrap'
import gasell from '../Assests/gasell.png'
import logo from '../Assests/em.png'

function Footer() {
    return (
        <>
            {/* Large screen */}
            <div style={{ overflowX: 'hidden' }} class="d-none d-lg-block d-none">

                <Row style={{ backgroundColor: '#7bc64a' }} className='ps-5 pt-4'>
                    <Col lg={3}>
                        <h4 style={{ color: 'white' }}>Kontakt</h4>
                        <p style={{ color: 'white' }}>Egestam Mattsson El & Data AB</p>
                        <p style={{ color: 'white' }}>Ridspögatan 15a</p>
                        <p style={{ color: 'white' }}>213 77 Malmö</p>
                        <br />
                        <p style={{ color: 'white' }}>Tel: 040-6170166</p>
                        <p style={{ color: 'white' }}>E-post:info@emeldata.se</p>
                        <br />
                        <p style={{ color: 'white' }}> Integritespolicy</p>

                    </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h4 style={{ visibility: 'hidden' }}>categories</h4>
                        <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</p>
                        <p style={{ color: 'white' }}>Hem</p>
                        <p style={{ color: 'white' }}>Hȧllbarhet</p>
                        <p style={{ color: 'white' }}>Tjänter</p>
                        <p style={{ color: 'white' }}>Kontakta oss</p>
                        <p style={{ color: 'white' }}>Jobba med oss</p>


                    </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h4 style={{ visibility: 'hidden' }}>categories</h4>
                        <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Din integritet</p>
                        <p style={{ color: 'white' }}>Integritetspolicy</p>
                        <p style={{ color: 'white' }}>Cookiepolicy</p>
                        <div className='d-flex'>
                            <i style={{ color: 'white' }} class="fa-brands fa-facebook fs-4"></i>
                            <p style={{ color: 'white', paddingLeft: '10px' }}>Facebook</p>
                        </div>

                    </Col>
                    <Col lg={3} className='d-flex flex-column'>
                        <h4 style={{ color: 'white' }}>Gasellvinnare</h4>
                        <img width={'200px'} height={'100px'} src={gasell} alt="gasell" />
                        <p style={{ color: 'white' }}>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>


                    </Col>
                    <Col lg={2} className='d-flex flex-column'>
                        <h4 style={{ visibility: 'hidden' }}>categories</h4>
                        <img width={'150px'} height={'100px'} className='d-flex pt-3' src={logo} alt="" />

                    </Col>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <hr className='text-white w-50' />
                        <p className='text-center text-white mt-3'>Copyright &#169; 2024 All rights reserved.</p>
                    </div>
                </Row>

            </div>
            {/* Medium Screen */}
            <div style={{ overflowX: 'hidden' }} className="d-none d-md-block d-lg-none">
                <Row className='ps-5' style={{ backgroundColor: '#7bc64a', paddingTop: '100px' }}>
                    <Col md={6}>
                        <Row>
                            <h4 style={{ color: 'white' }}>Kontakt</h4>
                            <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                                <p>Egestam Mattsson El & Data AB</p>
                                <p>Ridspögatan 15a</p>
                                213 77 Malmö
                            </div>
                            <br />

                            <div style={{ lineHeight: '0.5', color: 'white' }}>
                                <p className='mt-4'>Tel: 040-6170166</p>
                                <p>E-post:info@emeldata.se</p>
                            </div>

                        </Row>
                        <hr className='text-white' />

                        <Row className='mt-4'>
                            <Col md={6}>
                                <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</p>
                                <div style={{ color: 'white' }} >
                                    <p>Hem</p>
                                    <p>Hȧllbarhet</p>
                                    <p>Tjänter</p>
                                    <p>Kontakta oss</p>
                                    <p>Jobba med oss</p>
                                </div>
                            </Col>
                            <Col md={6}>
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
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <img width={'150px'} height={'100px'} className='d-flex pt-3' src={logo} alt="" />
                    </Col>
                </Row>
            </div>
            {/* Small screen */}
            <div style={{ overflowX: 'hidden' }} className='d-none d-sm-block d-md-none'>
                <Row className='pt-3 ps-4' style={{ backgroundColor: '#7bc64a' }}>


                    <Row >
                        <img style={{width:'200px' , height:'100px'}} src={logo} alt="" />
                        <h4 style={{ color: 'white', paddingTop: '20px' }}>Kontakt</h4>
                        <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                            <p>Egestam Mattsson El & Data AB</p>
                            <p>Ridspögatan 15a</p>
                            213 77 Malmö
                        </div>
                        <br />

                        <div style={{ lineHeight: '0.5', color: 'white' }}>
                            <p className='mt-4'>Tel: 040-6170166</p>
                            <p>E-post:info@emeldata.se</p>
                        </div>
                    </Row>
                    <hr className='text-white' />
                    <Row>
                        <Col xs={6}>
                            <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</p>
                            <div style={{ color: 'white' }} >
                                <p>Hem</p>
                                <p>Hȧllbarhet</p>
                                <p>Tjänter</p>
                                <p>Kontakta oss</p>
                                <p>Jobba med oss</p>
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
                <Row className='pt-3 ps-4' style={{ backgroundColor: '#7bc64a' }}>


                    <Row >
                        <img style={{width:'200px' , height:'100px'}} src={logo} alt="" />
                        <h4 style={{ color: 'white', paddingTop: '20px' }}>Kontakt</h4>
                        <div style={{ lineHeight: '0.5', color: 'white', marginTop: '10px' }}>
                            <p>Egestam Mattsson El & Data AB</p>
                            <p>Ridspögatan 15a</p>
                            213 77 Malmö
                        </div>
                        <br />

                        <div style={{ lineHeight: '0.5', color: 'white' }}>
                            <p className='mt-4'>Tel: 040-6170166</p>
                            <p>E-post:info@emeldata.se</p>
                        </div>
                    </Row>
                    <hr className='text-white' />
                    <Row>
                        <Col xs={6}>
                            <p style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Meny</p>
                            <div style={{ color: 'white' }} >
                                <p>Hem</p>
                                <p>Hȧllbarhet</p>
                                <p>Tjänter</p>
                                <p>Kontakta oss</p>
                                <p>Jobba med oss</p>
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