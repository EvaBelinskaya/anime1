import React,{Component} from 'react';
import FaqCard from "./FaqCard";
import {loadJson} from "../../utils";

class FaqList extends Component{

constructor(props) {
     super(props);
     this.state = {
         questions: [],
         isFetching:false,
         error:null,
     }
 };

componentDidMount = async ()=> {
  const questions = await loadJson('/questions.json');
   /*     .then()
        .catch();*/
   console.table(questions);
};



    renderQuestions = () => {
     const { questions } = this.state;
     return questions.map((question) =>{
         return (
             <li key={question.id}>
                <FaqCard question={question}/>
             </li>
         );
     });
 };

render() {
    const {isFetching} = this.state;

    if (isFetching) {
        return <div>Loading...</div>
    } else {
        return (
            <ol>
                {
                    this.renderQuestions()
                }
            </ol>
        );
    }
}
}

export default FaqList;