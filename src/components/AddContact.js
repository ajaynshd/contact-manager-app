import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const AddContact = (props) => { 
    const [state, setState] = useState({name:'',email:''});
    let navigate = useNavigate();
    const add = (e)=>{
        e.preventDefault();
        if(state.name ==='' || state.email === ''){
            alert('please fill all the fields');
            return;
        }
        // to send the data to parant
        props.addContactHandler(state);
        setState({name:'',email:''});
        navigate("/");
    }

    const handelInput = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        setState({...state,[name]:value});
    }

    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" 
                    value={state.name}
                    onChange={handelInput} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                    value={state.email}
                    onChange={handelInput} />
                </div>
                <button className="ui button blue">Add</button>
                <Link to="/">
                    <button className="ui button red right">Cancel</button>
                </Link>
            </form>
        </div>
    );
}
/*
class AddContact extends React.Component{
    state ={
        name:"",
        email:""
    }
    
    //submitForm(){
        //const navigate = useNavigate();
        add = (e)=>{
            e.preventDefault();
            //await submitForm(event.target);
            if(this.state.name ==='' || this.state.emai === ''){
                alert('please fill all the fields');
                return;
            }
            // to send the data to parant
            this.props.addContactHandler(this.state);
            this.setState({name:'',email:''});
            
            //navigate("/", { replace: true });
            //return <Navigate replace to='/' />
            //this.props.router.push('/');
            return <Navigate to="/" replace={true} />
        }
   // }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={(e)=> this.setState({name:e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}
                        onChange={(e)=> this.setState({email:e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}*/

export default AddContact;