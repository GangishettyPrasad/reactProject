import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const UserProfile = ()=>{
	
const [addPopUpOpen, setAddPopUpOpen]=useState(false)
const [selectFileCondition, SetSelectFileCondition]=useState(true);
const [proofCondition, SetProofCondition]=useState(true);
const [rentalAgreementC,setRentalAgreementC]=useState(true);

const [documentData, setDocumentData]=useState([]);
const [documentDataAll, setDocumentDataAll]=useState([]);
const [adhaarCardCondition, setAdhaarCardCondition]=useState(true);
const [voterIdCondition, setVoterIdCondition]=useState(true);
const [electricityBillCondition, setElectricityBillCondition]=useState(true);
const [phoneBillCondition, setPhoneBillCondition]=useState(true);
const [bankPassBookCondition, setBankPassBookCondition]=useState(true);
const [rentalAgreementCondition, setRentalAgreementCondition]=useState(true);
const [photoIDList, setPhotoIDList]=useState([]);
const [dobList, setDobList]=useState([]);
const [currentAddressList, setCurrentAddressList]=useState([]);
const [pAddressList, setPAddressList]=useState([]);
	const addPopUp = ()=> {
		setAddPopUpOpen(true);
		//alert('add click')
		reset()
	}
const onCloseAddPopUp = ()=>setAddPopUpOpen(false);

//use form 
const { register, handleSubmit, watch,reset , formState: { errors } } = useForm();
const onSubmit = data => {
	alert(data)
if (data.selectedID === "adhaarCard"){
	setAdhaarCardCondition(false);
	
}else if(data.selectedID === "voterID"){
	setVoterIdCondition(false);
}else if(data.selectedID === "electricityBill"){
	setElectricityBillCondition(false);
}else if(data.selectedID === "phoneBill"){
	setPhoneBillCondition(false);
}else if(data.selectedID === "bankPassBook"){
	setBankPassBookCondition(false);
}else if(data.selectedID === "rentalAgreement"){
	setRentalAgreementCondition(false);
}
else{
	setAdhaarCardCondition(true);	
	setVoterIdCondition(true);
	setElectricityBillCondition(true);
	setPhoneBillCondition(true);
	setBankPassBookCondition(true);
	setRentalAgreementCondition(true);
}
	setDocumentData( [...documentData,data] );
	console.log("new data",data);
	setDocumentDataAll(data)

	
	if(data){
		setAddPopUpOpen(false)
	}

	if(data.photoID === true){
		alert(data.photoID);
		photoIDList.push(data.photoID);
		//setPhotoIDList([...documentData,data])
	}
	if(data.dob === true){
		
		dobList.push(data.dob);
		//setDobList([...documentData,data]);
		alert(dobList);
		console.log(dobList[0]);
	}
	if(data.currentAddress === true){
		alert(data.currentAddress)
		setCurrentAddressList([...documentData,data])
	}
	if(data.permanentAddress === true){
		setPAddressList([...documentData,data])
	}
	console.log("document data",documentData);
	

	
	
};

const onChangeSelectID=(data)=>{
//alert(data.target.value)
let value = data.target.value;
if(value === "adhaarCard"){
	SetSelectFileCondition(false)
	SetProofCondition(true)
}
else if(value === "voterID" ){
	SetSelectFileCondition(true)
	SetProofCondition(true)
}
else if(value === "electricityBill" || value ==="phoneBill" || value ==="bankPassBook"){
	SetProofCondition(false);
	setRentalAgreementC(true);
}else if(value === "rentalAgreement" ){
	SetProofCondition(false);
	setRentalAgreementC(false);
}
else{
	SetSelectFileCondition(true);
	setRentalAgreementC(true);
}
}
	return (
		<><div  className="container mt-5">
			
			<table className="table table-bordered">
  			<thead>
					<h5>Proofs</h5>
			</thead>
			
			<tbody>
					<tr>
						<th scope="row">Photo ID</th>
						<td scope="row"></td>
						
						
					</tr>
					<tr>
						{dobList.map((data,index)=>{
						<th scope="row">{dobList.data}</th>
					})}
					

					</tr>
					<tr>
						<th scope="row">Current Address</th>
						{currentAddressList.map((data,index)=>{
						<td scope="row">{data.currentAddress}</td>
					})}
						
					</tr>
					<tr>
						<th scope="row">Permanent Address</th>
						{pAddressList.map((data,index)=>{
						<td scope="row">{data.permanentAddress}</td>
					})}
						
					</tr>
			</tbody>
				</table>
				<br />
				<div>
				<table className="table">
  			<thead>
					<tr>
					<th scope="col">Uploaded Documents</th>
					<th scope="col"></th>
					</tr>
			</thead>
			<thead>
					<tr>
					<th scope="col">TYPE</th>
					<th scope="col">ID</th>
					<th scope="col">UPLOADED BY</th>
					<th scope="col">VERIFICATION</th>
					<th scope="col">ACTIONS</th>
					</tr>
			</thead>
			<tbody>
				{documentData.map((value,id)=>{
					return <tr>
						
						<td scope="row">{value.enteredID}</td>
						<td scope="row">{value.selectedID}</td>
						<td scope="row">prasad</td>
						<td scope="row">done</td>
					</tr>
				})}
					
					
			</tbody>
				</table>
				</div>
				<br/>
				<button className="btn btn-primary" onClick={addPopUp} >ADD <BiPlus /></button>
				
		</div>
		
			<Modal show={addPopUpOpen} onHide={onCloseAddPopUp} className="mx-3	">
			<Modal.Header closeButton>
				<Modal.Title>Add Document</Modal.Title>
			</Modal.Header>
			<br/>
				
			<Form   onSubmit={handleSubmit(onSubmit)} >
					<div className='mx-3'>
						<div className='mb-3'>
							<label className='mb-2 form-label'>Select ID Type </label>
								<select className="form-select"  {...register("selectedID")} onChange={(e)=>onChangeSelectID(e)}>
									<option selected>---</option>
									{adhaarCardCondition ? <option value="adhaarCard">Adhaar Card</option> : " "}
									{voterIdCondition ?<option value="voterID">Voter ID</option> : " " }
									{electricityBillCondition ? <option value="electricityBill">Electricity Bill</option> : " " }
									{phoneBillCondition ? <option value="phoneBill">Phone Bill</option> : " "}
									{bankPassBookCondition ? <option value="bankPassBook">Bank PassBook</option> : " "}
									{rentalAgreementCondition ? <option value="rentalAgreement">Rental Agreement</option> : " "}
								</select>
						</div>
						{proofCondition ? (<div className="mb-3">
  							<label for="exampleFormControlInput1" className="form-label">Enter Id</label>
  							<input type="text" className="form-control" id="exampleFormControlInput1"   {...register("enteredID")}/>
						</div>):(<></>)}
						<div className="mb-3">
						<label  className="form-label">Use it as proof for</label>
  							{proofCondition ? (<div><div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  {...register("photoID")}/>
								<label className="form-check-label" for="flexCheckDefault">
								Photo ID
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  {...register("dob")}/>
								<label className="form-check-label" for="flexCheckChecked">
									Date Of Birth
								</label>
							</div></div>):(<></>)}
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"  {...register("currentAddress")}/>
								<label className="form-check-label" for="flexCheckDefault1">
									Current Address
								</label>
							</div>
						{ rentalAgreementC ?( <div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1"  {...register("permanentAddress")}/>
								<label className="form-check-label" for="flexCheckChecked1">
									Permanent Address 
								</label>
							</div> ) : "" }	
					</div>
					{selectFileCondition ? (<div className="input-group">
						<input type="file" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"  {...register("selectedFile")}/>
    				</div>):(<></>)}
				
				</div>	
				
				<br/>
				<div className='mx-3'>
				<Button variant="primary" onClick={onCloseAddPopUp}>
					Close
				</Button>&nbsp;
				<Button variant="primary" type="submit" >
					Save 
				</Button>
				</div></Form >
				<br/>
			</Modal>
		
		
		</>
	)
}
export default UserProfile;
