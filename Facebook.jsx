import React from 'react'
import './Facebook.css'

function Facebook() {
    return (
        <div>

            <h1 className="logo">Facebook</h1>
            <div className="boxlogin">
                <div className="subHeader">
                    <h1 className="header">Create a new account</h1>
                    <h2 className="header3">it's quick and easy</h2>
                </div>
                <div>
                    <form>
                        <div className="nameDetails">
                            <input type="text" className="first_name" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name"></input>
                        </div>
                        <div className="email">
                            <input type="text" placeholder="Mob Number or Email Adress"></input>
                        </div>
                        <div className="pass">
                            <input type="text" placeholder="Password"></input>
                        </div>
                        <div className="dateBirth">
                            <label for="date of birth">Date of birth ? </label>
                        </div>
                        <div className="dateDetails">
                            <input type="number"></input>
                            <input type="number"></input>
                            <input type="number"></input>
                        </div>
                        <div className="gender">
                            <label for="Gender">Gender</label>
                        </div>
                        <div className="genderDetails">
                            <input type="text" placeholder="Female"></input>
                            <input type="text" placeholder="Male"></input>
                            <input type="text" placeholder="custom"></input>
                        </div>
                        <div className="last_details">
                            <button className="submit" type="submit">Sign up </button>
                            <span className="already">Already have an account ?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Facebook;