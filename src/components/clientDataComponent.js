import React, { Component } from 'react';

class ClientData extends Component {
   

     constructor(props) {
        super(props);
       
        this.state = { 
            firstname:'',
            lastname:'',
            address:'',
            email:'',
            phoneNumber:'',
            subscriptionState:{
                monthly:false,
                weekly:false
            }
        }
        
    }
   

   


    render() {
        return (
            <div className='container'>
            <div className="col-12 col-md-9">
            <form>
                <div className="row mb-3">
                    <label for="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputFirstName" placeholder='First Name'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputLastName" placeholder='Last Name'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputAddress" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputAddress" placeholder='Address'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputAddress" placeholder='Email'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputNumber" placeholder='Phone Number'/>
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Subscription State</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="monthly" value='true' />
                        <label className="form-check-label" for="monthly">
                        Monthly
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="weekly" value="true"/>
                        <label className="form-check-label" for="weekly">
                        Weekly
                        </label>
                    </div>
                    </div>
                </fieldset>
                
                <button type="submit" className="btn btn-primary">Next</button>
                
                    </form>
                    </div>
                    </div>

        );
    }
}

export default ClientData;