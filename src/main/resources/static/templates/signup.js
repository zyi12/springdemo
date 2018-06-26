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
								          <div class="form-group">
								            <label for="email" class="col-form-label">Email:</label>
								            <input type="text" class="form-control" id="email">
								          </div>
								          <div class="form-group">
								            <label for="password" class="col-form-label">Password:</label>
								            <input type="text" class="form-control" id="password">
								          </div>
								          <div class="form-group">
								            <label for="username" class="col-form-label">Username:</label>
								            <input type="text" class="form-control" id="username">
								          </div>
								        </form>
								      </div>
								      <div class="modal-footer">
								        <button type="button" class="btn btn-secondary close_modal" data-dismiss="modal">Close</button>
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