var confirmModal = `<div class="modal fade" id="confirm_modal" tabindex="0" role="dialog" aria-labelledby="confirm_modal" aria-hidden="true">
					  <div class="modal-dialog" role="document">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btn-secondary close_confim_modal" data-dismiss="modal">Close</button>
					        <button type="button" class="btn btn-success">Submit</button>
					      </div>
					    </div>
					  </div>
					</div>`;
function init(){
	$(document).on("click", "#create_account",function(e) {
		var createAccountModal = `<div class="modal fade" id="create_account_modal" tabindex="-1" role="dialog" aria-labelledby="create_account_modal" aria-hidden="true">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
								      </div>
								      <div class="modal-body">
								        <form>
								        
								        <div class="row">
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="firstname" class="col-form-label">First Name:</label>
								            	<input type="text" class="form-control" id="firstname">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="username" class="col-form-label">Username:</label>
								            	<input type="text" class="form-control" id="username">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="middlename" class="col-form-label">Middle Name:</label>
								            	<input type="text" class="form-control" id="middlename">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="password" class="col-form-label">Password:</label>
								            	<input type="text" class="form-control" id="password">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
									            <label for="lastname" class="col-form-label">Last Name:</label>
									            <input type="text" class="form-control" id="lastname">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="mobileno" class="col-form-label">Mobile No.:</label>
								            	<input type="text" class="form-control" id="mobileno">
								          	</div>
							              </div>
							              <div class="col-md-6 mb-3">
								          	<div class="form-group input-group-sm date">
								          		<label for="birthdate" class="col-form-label">Birth Date:</label>
											    <input type="text" class="form-control" data-provide="datepicker" id="birthdate">
											    <div class="input-group-addon"></div>
											</div>
							              </div>
							              <script>$('.datepicker').datepicker();</script>
							              <div class="col-md-6 mb-3">
							                <div class="form-group input-group-sm">
								            	<label for="email" class="col-form-label">Email:</label>
								            	<input type="text" class="form-control" id="email">
								          	</div>
							              </div>
							            </div>
								        </form>
								      </div>
								      <div class="modal-footer">
								        <button type="button" class="btn btn-light close_modal" data-dismiss="modal">Close</button>
								        <button type="button" class="btn btn-success submit_modal">Submit</button>
								      </div>
								    </div>
								  </div>
								</div>`;
		$('#custom_modal').html(createAccountModal);
		$('#create_account_modal').modal('toggle');
	});
	$(document).on("click", ".submit_modal",function(e) {
		$('#custom_confirm_modal').html(confirmModal);
		$('#create_account_modal').modal('toggle');
		$('#confirm_modal').modal('toggle');
	});
	$(document).on("click", ".close_confim_modal",function(e) {
		$('#confirm_modal').modal('toggle');
		$('#create_account_modal').modal('toggle');
	});
}
init();