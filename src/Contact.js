
import './App.css';

function Contact() {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <div class="input-group mb-3">
                <span class="input-group-text">First Name</span>
                <input type="text" class="form-control" placeholder="Enter your First Name"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Last Name</span>
                <input type="text" class="form-control" placeholder="Enter your Last Name"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Phone Number</span>
                <input type="text" class="form-control" placeholder="Enter your Phone Number"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="text" class="form-control" placeholder="Enter your Email"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Message</span>
                <input type="text" class="form-control" placeholder="Enter your message"></input>
            </div>
        </div>
    );
}
export default Contact;
