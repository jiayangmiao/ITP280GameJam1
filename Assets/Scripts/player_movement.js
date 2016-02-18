#pragma strict
private var movement : Vector3 = Vector3.zero;
private var controller : CharacterController;

function Start () {
	controller = GetComponent (CharacterController);
}

function Update () {
	movement = Vector3(2.5, Input.GetAxis("Vertical"), 0);
	movement = transform.TransformDirection (movement);
	movement *= 8; 	// Setup movement by Speed

	controller.Move(movement * Time.deltaTime); // Apply movement
	
}
