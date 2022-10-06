import { useState } from 'react';
import './App.css';

function App() {

  let data1 = [
    {
      name:'hamza',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'ali',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'huzifa',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'gaga',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'game',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'adsf',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
    {
      name:'hamza',
      email:'mhamzaking2012@gamil.com',
      address:'house no l 460 sectore karachi',
      phone:'03333084380'
    },
  ]
  const [data,setData]=useState(data1)
  const [dlete,setDelete]=useState(false)
  const [addEmp,setAddEmp]=useState(false)
  const [edit,setEdit]=useState(false)
  const [checkDelete,setCheckDelete]=useState()
  const [addempData,setAddempData]=useState({
    name:'',
    email:'',
    address:'',
    phone:'',
  })
  const Changehandler=(e)=>{
    const {name,value}=e.target;
    setAddempData({
      ...addempData,
      [name]:value
    })
  }
  const handlerSubmit=(e)=>{
  e.preventDefault()
  setData([
    ...data,addempData
  ])
  setAddEmp(false)
  }
  const handlerEditSubmit=(e)=>{
  e.preventDefault()
  let as = data.forEach((element, index) => {
    if(index == checkDelete) {
        data[index] = addempData;
    }
  });
  setEdit(false)
  
  }
const handlerChange=(e)=>{
  const {value,name,checked} = e.target;
  name=='allSelected'?setData(data.map((user,index)=> {return{...user,isChecked: checked}})):(
  setData(data.map((user,index)=> index == value?{...user,isChecked:checked}:user))
  )
}
const addEmplyHandler =()=>{
  setAddEmp(true)
}
const deleteHandler =()=>{
    if( !/\D/.test(checkDelete)){
      let newData = data.filter((item,index)=>(
        index !== checkDelete
      ))
      setData(newData)
      }
    if(checkDelete=='selectedDel'){
      let filter = data.filter((item)=>(
        item.isChecked !== true
      ))
      setData(filter)
    }
    setDelete(false)

  
}
const editHandler =(item,index)=>{
  setEdit(true)
  setAddempData(item)
  setCheckDelete(index)
}
  return (
    <div className="App">
   <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
						<a onClick={addEmplyHandler} className="btn btn-success" style={{cursor:'pointer'}} data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
						<a onClick={()=>(setDelete(true),setCheckDelete('selectedDel'))} className="btn btn-danger" style={{cursor:'pointer'}} data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
					</div>
				</div>
			</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll" onChange={handlerChange}  name='allSelected' />
								<label htmlFor="selectAll"></label>
							</span>
						</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
          {data&&data?.map((items,index)=>(

					<tr key={index}>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" checked={items.isChecked|| false} onChange={handlerChange}  value={index} />
								<label htmlFor="checkbox1"></label>
							</span>
						</td>
						<td>{items.name}</td>
						<td>{items.email}</td>
						<td>{items.address}</td>
						<td>{items.phone}</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" onClick={()=>(editHandler(items,index))} title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" onClick={()=>(setDelete(true),setCheckDelete(index))} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
          ))}
					
				</tbody>
			</table>
			<div className="clearfix">
				<div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul className="pagination">
					<li className="page-item disabled"><a href="#">Previous</a></li>
					<li className="page-item"><a href="#" className="page-link">1</a></li>
					<li className="page-item"><a href="#" className="page-link">2</a></li>
					<li className="page-item active"><a href="#" className="page-link">3</a></li>
					<li className="page-item"><a href="#" className="page-link">4</a></li>
					<li className="page-item"><a href="#" className="page-link">5</a></li>
					<li className="page-item"><a href="#" className="page-link">Next</a></li>
				</ul>
			</div>
		</div>
	</div>        
</div>
{/* <!-- Edit Modal HTML --> */}
<div  style={{display:`${addEmp?'block':'none'}`}} className="modal ">
	<div className="modal-dialog">
		<div className="modal-content">
			<form onSubmit={handlerSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" data-dismiss="modal" onClick={()=>setAddEmp(false)} aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" onChange={Changehandler} name='name' className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" onChange={Changehandler} name='email' className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea className="form-control" onChange={Changehandler} name='address' required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" onChange={Changehandler} name='phone' className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</div>
{/* <!-- Edit Modal HTML --> */}
<div id="editEmployeeModal" style={{display:`${edit?'block':'none'}`}} className="modal ">
	<div className="modal-dialog">
		<div className="modal-content">
			<form onSubmit={handlerEditSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Edit Employee</h4>
					<button type="button" className="close" data-dismiss="modal" onClick={()=>setEdit(false)} aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" onChange={Changehandler} value={addempData.name} name='name' className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" onChange={Changehandler} value={addempData.email} name='email' className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea onChange={Changehandler} value={addempData.address} name='address' className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" onChange={Changehandler} value={addempData.phone} name='phone' className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" onClick={()=>setEdit(false)} value="Cancel"/>
					<input type="submit" className="btn btn-info" value="Save" />
				</div>
			</form>
		</div>
	</div>
</div>
{/* <!-- Delete Modal HTML --> */}
<div id="deleteEmployeeModal" style={{display:`${dlete?'block':'none'}`}} className="modal ">
	<div className="modal-dialog">
		<div className="modal-content">
			<form>
				<div className="modal-header">						
					<h4 className="modal-title">Delete Employee</h4>
					<button type="button" className="close" data-dismiss="modal" onClick={()=>setDelete(false)} aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<p>Are you sure you want to delete these Records?</p>
					<p className="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" onClick={()=>setDelete(false)} value="Cancel"/>
					<input type="submit" className="btn btn-danger" value="Delete" onClick={()=>deleteHandler()}/>
				</div>
			</form>
		</div>
	</div>
</div>
    </div>
  );
}

export default App;
