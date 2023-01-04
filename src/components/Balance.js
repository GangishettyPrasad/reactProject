import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { FcUpload, FcDownload } from 'react-icons/fc'
import mainlogo from '../Assets/Imgs/logo.png'
import api from '../Assets/Imgs/api.png'
import audio from '../Assets/Imgs/audio.png'
import predictive from '../Assets/Imgs/predictive.png'
import profile from '../Assets/Imgs/profile.png'
import supports from '../Assets/Imgs/supports.png'
import synchronous from '../Assets/Imgs/synchronous.png'
import upgrade from '../Assets/Imgs/upgrade.png'
import upgradee from '../Assets/Imgs/upgradee.png'
import image from '../Assets/Imgs/img.png'

const Balance = () => {
  return (
    <>
      <nav className="navbar custom-bg-color text-white text-dark ">
        <div className="container-fluid main_width">
          <div>
            <img
              src={mainlogo}
              width="50px"
              height="50px"
              className="rounded-circle"
            />
            <br />
            <span>SpeechX</span>
          </div>

          <div>
            <a className="navbar-brand text-white" href="#">
              PRASAD GANGISHETTY
            </a>
            <img
              src={profile}
              width="50px"
              height="50px"
              className="rounded-circle"
            />
          </div>
          {/* <div><img src={profile} width="50px" height="50px" className="rounded-circle" /></div> */}
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src={api} className="p-2" />
            </div>
            <div>
              <h4 className="orange text-bolder">Guide For API Integration</h4>
              <div>
                <h5 className="text_Heading font-bold">
                  Get a detailed insight on integrating
                  <br />
                  API by accessing the
                  <br />
                  how-to-guide
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6"> </div>
        </div>
      </div>

      {/* <div className="container-fluid ">
        <div className="row container-fluid bg-white shadow-lg rounded mx-auto p-4 main_width">
          <div className="col-md-6 text-center p-3">
            <div className=" border-end d-flex ">
              <div className="p-3 col-md-6">
                <img src={api} className="p-2" />
                <br />
              </div>
              <div className=" my-auto text-center col-md-6">
                <br />
                <div className="">
                  <small className="d-inline-flex mb-1 px-3 py-1 fw-semibold text-success bg-primary bg-opacity-10 border border-success border-opacity-10 rounded-pill fw-bold">
                    Code
                  </small>
                </div>
                <div>
                  <h4 className="orange text-bolder">
                    Guide For API Integration
                  </h4>
                </div>
                <div className=" ">
                  <h5 className="text_Heading font-bold">
                    Get a detailed insight on integrating
                    <br />
                    API by accessing the
                    <br />
                    how-to-guide
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center ">
            <div className="d-flex ">
              <div className=" my-auto col-md-6 ">
                <br />
                <div className="">
                  <small className="d-inline-flex mb-1 px-3 py-1 fw-semibold text-success bg-warning  bg-opacity-10 border border-success border-opacity-10 rounded-pill fw-bold">
                    No Code
                  </small>
                </div>
                <div>
                  <h4 className="orange text-bold">Upload Your Files Here </h4>{' '}
                </div>
                <div className=" ">
                  <h5 className="text_Heading font-bold">
                    Single click upload (or)<br></br>
                    drag your files right from your PC
                  </h5>{' '}
                </div>
                <h5 class="text-muted">(Supported formats: .mp3, MAV, MP4)</h5>
              </div>
              <div className="p-3 col-md-6">
                <img src={upgrade} className="p-2" />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid   ">
        <div className="row  bg-white shadow-lg rounded mx-auto p-4 main_width">
          <div className="col-md-2 my-3  border-end ">
            <div className=" text-center">
              <div className="mt-2">
                <img
                  src={synchronous}
                  width="80px"
                  height="80px"
                  className="rounded-circle "
                />
                <br />
              </div>
              <h5 className="text_Heading font-bold mt-2">
                synchronous
                <br />
                Transcription
              </h5>
              <p className="text-muted fw-semibold">
                Witness the real-time
                <br />
                transcription with
                <br />
                asingle tap
              </p>
            </div>
          </div>
          <div className="col-md-2 my-3 border-end">
            <div className=" text-center">
              <div className="mt-2">
                <img src={supports} width="80px" height="80px" />
                <br />
              </div>
              <h5 className="text_Heading font-bold mt-2">
                supports <br />
                21+ languages
              </h5>
              <p className="text-muted fw-semibold">
                Your transcription requirement
                <br />
                is met with our multi language
                <br />
                transcribe tool
              </p>
            </div>
          </div>
          <div className="col-md-2 my-3 border-end">
            <div className=" text-center">
              <div className="mt-2">
                <img src={audio} width="80px" height="80px" />
                <br />
              </div>
              <h5 className="text_Heading font-bold mt-2">
                Audio <br />
                Segmentation
              </h5>
              <p className="text-muted fw-semibold">
                Isolating a human speaking
                <br />
                audio stream into distinct
                <br />
                homogeneous parts according to
                <br />
                each speaker's identification
              </p>
            </div>
          </div>
          <div className="col-md-2 my-3 border-end">
            <div className=" text-center">
              <div className="mt-2">
                <img
                  src={predictive}
                  width="80px"
                  height="80px"
                  className="rounded-circle"
                />
                <br />
              </div>
              <h5 className="text_Heading font-bold mt-2">
                Predictive
                <br />
                Punctuation
              </h5>
              <p className="text-muted fw-semibold">
                Punctuation is handled
                <br />
                effectively with our influential
                <br />
                in-app process.
              </p>
            </div>
          </div>
          <div className="col-md-4 my-3 ">
            <div className="text-center">
              <h4 className="text_SubHeading font-bold mt-2">
                Upgrade your existing plan
              </h4>
              <div className=" text-center">
                <img src={upgradee} width="200px" height="200px" />
                <br />
              </div>
              <p className="text-muted fw-semibold mt-2">
                Advance your productivity by upgrading
                <br />
                your existing plan to avail more features
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid ">
        <div className="row container-fluid  main_width mx-auto p-4 ">
          <div className="col-md-8 ">
            <span className="text-info fw-bold">25 Dec to 30 Dec </span>
            <h5 className="text_Heading font-bolder mt-2">Your Transcripts</h5>

            <img
              src={image}
              width="700px"
              height={200}
              className="border-bottom"
            />
            <div className="d-flex">
              <h5 className="text_Heading font-bolder mt-2 flex-grow-1">
                Last Transcripts Time
              </h5>
              <small className="d-inline-flex mb-1 px-3 py-1 fw-semibold text-success bg-success  bg-opacity-10 border border-success border-opacity-10 rounded-pill fw-bold">
                View Dashboard
              </small>
            </div>
          </div>

          <div className="col-md-4  ">
            <div className="text-center bg-white shadow-lg rounded ml-3">
              <h4 className="text_SubHeading font-bold mt-2">
                Upgrade your existing plan
              </h4>
              <div className=" text-center">
                <img src={upgradee} width="200px" height="200px" />
                <br />
              </div>
              <p className="text-muted fw-semibold mt-2">
                Advance your productivity by upgrading
                <br />
                your existing plan to avail more features
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <br></br>
    </>
  )
}
export default Balance
