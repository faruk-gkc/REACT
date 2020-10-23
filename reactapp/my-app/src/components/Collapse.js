import React from "react";

class Collapse extends React.Component {

   constructor(){
       super();
       this.state = {
           show : false
       }
   }

   showMore  = () => {
    this.setState ({show : !this.state.show})
   }
     
   componentDidMount(){
     console.log("Component oluşturuldu..")
   }
   componentDidUpdate(){
     console.log("Component Güncellendi..")
   }

   

    render() {
        return <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
        {React.Children.map(this.props.children, children => children.props.cardTitle)}
        </button>

        {
            this.state.show ? (
                <div className="collapse show">
                {this.props.children}
                </div>
            ) : null
        }

  
       
           
        
      </div>
   
  };
  
  
    }


  export default Collapse; // EXPORT ETMEK GEREKİYOR..