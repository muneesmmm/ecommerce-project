import React from 'react'
import './Addproduct.css'
function Addproduct() {
    return (
        <div class="container">
            <div class="abcd mt-2">      
	<form class="myform" class="form-group">
	
		<div class="container" >
			<div class="header">
			<h1 class="text-center mb-5">ADD PRODUCTS</h1></div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input">Product Code</label>
					<input type="text" name="" class="form-control" placeholder=""/>
				</div>
				<div class="form-group col-md-6">
					<label for="input">Product Name</label>
					<input type="text" name="" class="form-control" placeholder=""/>
				</div>
			</div>
		
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input">Gender</label>
					<input type="text" name="" class="form-control" placeholder=""/>
				</div>
				<div class="form-group col-md-6">
					<label for="input">Size</label>
					<input type="text" name="" class="form-control" placeholder=""/>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="input">Product Material</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Product Category</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Product Brand</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="input">Stock Quantity</label>
					<input type="number" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Available Quantity</label>
					<input type="number" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Main Price</label>
					<input type="number" name="" class="form-control" placeholder="" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input">Product Description</label>
					<textarea class="form-control" name=""></textarea>
				</div>
				<div class="form-group col-md-6">
					<label for="input">Percentage Discount</label>
					<input type="number" name="" class="form-control" placeholder="" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input">Stock Alert</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-6">
					<label for="input">Discount Price</label>
					<input type="number" name="" class="form-control" placeholder="" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="input">Image/File</label>
					<input type="file" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Color Types</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
				<div class="form-group col-md-4">
					<label for="input">Status</label>
					<input type="text" name="" class="form-control" placeholder="" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-12 text-center text-right mt-5">
					<button > Save Product</button>
				</div>
			</div>
		</div>
	
</form>
</div>
        </div>
    )
}

export default Addproduct
