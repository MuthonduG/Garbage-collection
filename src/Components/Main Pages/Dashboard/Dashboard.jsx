import React from 'react'
import './dashboard.css'
import Usernav from '../../Page components/User Nav/Usernav'
import Card from '../../Page components/Card/Card'

const Dashboard = () => {
  return (
    <>
      <Usernav/>
      <section className="dashboard__container container">
        <div className="dashboard__container-holder">
          <aside className="dashboard__profile">
            <div className="dashboard__profile-avatar">
              <img src="https://image.pngaaa.com/603/5170603-middle.png" alt="" />
            </div>
            <div className="dashboard__profile-content">
              <div className="dashboard__content-body">
                <strong className="dashoard__name">Name:</strong>
                <small className="dashboard__name-holder">Maxwell Githinji</small>
              </div>
              <div className="dashboard__content-body">
                <strong className="dashoard__name">Email:</strong>
                <small className="dashboard__name-holder">maxwellgithinji@gmail.com</small>
              </div>
              <div className="dashboard__content-body">
                <strong className="dashoard__name">Phone number:</strong>
                <small className="dashboard__name-holder">Maxwell Githinji</small>
              </div>
              <div className="dashboard__content-body">
                <strong className="dashoard__name">Current residence:</strong>
                <small className="dashboard__name-holder">Githurai</small>
              </div>
              <div className="dashboard__content-body">
                <strong className="dashoard__name">Building:</strong>
                <small className="dashboard__name-holder">Amani Plaza</small>
              </div>
            </div>
            <div className="dashboard__package">
              <div className="dashboard__package-header">
                <strong>Premium:</strong>
              </div>
              <div className="dashboard__package-status">
                <small>Active</small>
              </div>
            </div>
          </aside>
          <div className="dashboard__main-body">
            <Card>
              <div className="dashboard__card-date">
                <strong>Thursday</strong>
                <small>May 29, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
            <Card>
              <div className="dashboard__card-date">
                <strong>Monday</strong>
                <small>May 26, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
            <Card>
              <div className="dashboard__card-date">
                <strong>Thursday</strong>
                <small>May 23, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
            <Card>
              <div className="dashboard__card-date">
                <strong>Monday</strong>
                <small>May 20, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                  Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
            <Card>
              <div className="dashboard__card-date">
                <strong>Thursday</strong>
                <small>May 17, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
            <Card>
              <div className="dashboard__card-date">
                <strong>Monday</strong>
                <small>May 14, 2023</small>
              </div>
              <div className="dashbord__progress-title">
                Organic
              </div>
              <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
              </div>
              <div className="dashbord__progress-title">
                E-waste
              </div>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark" style={{width: "50%"}}>50%</div>
              </div>
              <div className="dashbord__progress-title">
                Plastic
              </div>
              <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
              </div>
              <div className="dashbord__progress-title">
                Chemicals
              </div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "100%"}}>100%</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard