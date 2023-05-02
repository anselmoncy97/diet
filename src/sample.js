import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <Row>
        {props.currentStep < props.totalSteps && (
          <Col>  
            <Button onClick={handleNext}>Next</Button>
          </Col>
          )}

        {props.currentStep > 1 && (
          <Col>
            <Button onClick={handleBack}>Back</Button>
          </Col>
        )}
        
        {props.currentStep === props.totalSteps && (
           <Col>
           <Button onClick={handleFinish}>Finish</Button>
           </Col>
        )}
        
      </Row>
    </div>
  );
};

//----------------------------------------basic-info----------------

const One = (props) => {
  const [info1, setInfo1] = useState({});
  const [info2, setInfo2] = useState({});
  const [info3, setInfo3] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue
    }));
    setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
    }));
    setInfo3((info3) => ({
      ...info3,
      [targetName]: targetValue
    }));
  };

  const validate = () => {
    if (!info1.name) setError("Name is mandatory field");
    
    else if (!info2.age) setError("Age is mandatory field");
    else if (info2.age < 18) setError("You are too young for our program");
    else if (info2.age > 80) setError("you are too old for our program");
    
    else if (!info3.email) setError("Email is required");
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(info3.email)) setError("Invalid email address");
    
    else {
      setError("");
      props.nextStep();
      props.userCallback(info1);
      props.userCallback(info2);
      props.userCallback(info3);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 1 content</h1>
      <FormGroup>
        <Label>Name: </Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={onInputChanged}
        />
      </FormGroup>
      <FormGroup>
        <Label>Age: </Label>
        <Input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={onInputChanged}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input
          type="text"
          name="email"
          placeholder="Enter your Email"
          onChange={onInputChanged}
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

//--------------------------------address--------------------

const Two = (props) => {
  const [info4, setInfo4] = useState({});
  const [error, setError] = useState("");

   const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
  
    setInfo4((info4) => ({
      ...info4,
      [targetName]: targetValue
    }));
   };

  const validate1 = () => {
    if (!info4.addr) setError("Address is required");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info4);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 21 content</h1>
      <FormGroup>
        <Label>Address: </Label>
        <Input
          type="textarea"
          name="addr"
          placeholder="Enter your address"
          onChange={onInputChanged}
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate1} />
    </div>
  );
}; 
//-----------------------------------------Physical-Info---------

const Two1 = (props) => {
  const [info3, setInfo3] = useState({});
  const [error, setError] = useState("");

   const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
  
    setInfo3((info3) => ({
      ...info3,
      [targetName]: targetValue
    }));
   };

  const validate2 = () => {
    if (!info3.height) setError("height is required");
    else if (!info3.weight) setError("weight is required");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info3);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 21 content</h1>
      <FormGroup>
        <Label>Height:</Label>
        <Input
          type="number"
          name="height"
          placeholder="Enter your height"
          onChange={onInputChanged}
        />
        <Label> cm</Label>
      </FormGroup>
      <FormGroup>
        <Label>Weight:</Label>
        <Input
          type="number"
          name="weight"
          placeholder="Enter your weight"
          onChange={onInputChanged}
        />
        <Label> kg</Label>
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

//------------------------------Goals---------------------------

const Two2 = (props) => {

    const [info4, setInfo4] = useState({});
    const [error, setError] = useState("");
  
     const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
    
      setInfo4((info4) => ({
        ...info4,
        [targetName]: targetValue
      }));
     };
  
    const validate1 = () => {
      if (!info4.dwt) setError("weight is required");
      else {
        setError("");
        props.nextStep();
        props.userCallback(info4);
      }
    };
  
    return (
      <div>
        <span style={{ color: "red" }}>{error}</span>
        <h1>This is step 21 content</h1>
        <FormGroup>
          <Label>Desired weight: </Label>
          <Input
            type="number"
            name="dwt"
            placeholder="Enter your desired weight"
            onChange={onInputChanged}
          />
        </FormGroup>
        <br />
        <ActionButtons {...props} nextStep={validate1} />
      </div>
    );
  }; 


//-------------------------------summary--------------------------

const Three = (props) => {
  console.log("step5 receive user object");
  console.log(props.user);

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
      <p>Address: {props.user.addr}</p>
      <p>Height: {props.user.height}</p>
      <p>Weight: {props.user.weight}</p>
      <p>BMI Score: {props.user.weight /  (((props.user.height / 100) * (props.user.height / 100))).toFixed(2)}</p>



      <p>Desired Weight: {props.user.dwt}</p>
      
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};
//-----------------------------------------------------main function-------------------------------------------------
const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  return (
    <div>
    <Stepper activeStep={activeStep}>
      <Step label="Basic Info" children={<MdDescription />} />
      <Step label="Address" />
      <Step label="Phy Info" />
      <Step label="Goal" />
      <Step label="Summary" />
    </Stepper>
    <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
      <One userCallback={assignUser} />
      <Two user={user} userCallback={assignUser} />
      <Two1 user={user} userCallback={assignUser} />
      <Two2 user={user} userCallback={assignUser} />
      <Three user={user} completeCallback={handleComplete} />
    </StepWizard>
  </div>
  );
};

export default Sample;
