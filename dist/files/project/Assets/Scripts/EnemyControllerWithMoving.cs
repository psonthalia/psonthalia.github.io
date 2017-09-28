using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyControllerWithMoving : MonoBehaviour {
	
	public float turnSpeed = 1.0f;
	private float time2 = 0f;
	private float turnTime = 2f;
	private int direction2 = 1;  //positive 1 = left, negative 1 = right

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (time2 > turnTime) {
			direction2 = direction2 * -1;
			time2 = 0; //reset time back to 0
		}

		//move your character forward
		transform.Translate(Vector3.left * direction2 * Time.deltaTime);
		//increase time
		time2 += Time.deltaTime;

		int direction = 0; //negative=left positive=right

		if (direction > 0)
			transform.Rotate (new Vector3 (0f, 1f, 0f) * Time.deltaTime * turnSpeed);
		else if (direction < 0)
			transform.Rotate (new Vector3 (0f, -1f, 0f) * Time.deltaTime * turnSpeed);
	}
	void OnCollisionEnter(Collision other) {
	}
}