import React from 'react';
import { Form } from 'react-bootstrap';
import './implementation.css';

export default function Implementation() {
    return (
        <div>
            <div className='container'>
                <div className='implementation'>
                    <div className='road-map'>
                        <div></div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div className='line'></div>
                                <p>0.4 ROADMAP</p>
                            </div>
                        </div>
                    </div>
                    <div className='road-content'>
                        <h2>Implementation Sheet</h2>
                        <p>
                            At Lymcoin we have one focus - creating a viable
                            data marketplace to start returning value to token
                            holders in the shortest time possible.
                        </p>
                    </div>
                    <div>Test</div>
                    <div className='road-range'>
                        <div>
                            <span className='yellow'></span>
                            <span className='yellow-line'></span>
                        </div>
                        <div>
                            <span className='yellow'></span>
                            <span className='yellow-line'></span>
                        </div>
                        <div>
                            <span className='yellow'></span>
                            <span className='yellow-line'></span>
                        </div>
                        <div>
                            <span className='yellow'></span>
                            <span className='yellow-black'></span>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
