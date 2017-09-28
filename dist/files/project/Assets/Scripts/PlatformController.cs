using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformController : MonoBehaviour {
	private float time = 0f;
	private float turnTime = 2f;
	private int direction = 1;  //positive 1 = left, negative 1 = right

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (time > turnTime) {
			direction = direction * -1;
			time = 0; //reset time back to 0
		}

		//move your character forward
		transform.Translate(Vector3.left * direction * Time.deltaTime);
		//increase time
		time += Time.deltaTime;
	}
}