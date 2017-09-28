using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : MonoBehaviour {

	// Use this for initialization
	void Start () {}

	// Update is called once per frame
	void Update () {}

	void OnCollisionEnter(Collision other){
		if (other.gameObject.CompareTag("Portal1")) {
			SceneManager.LoadScene("Level2");
		}
		if(other.gameObject.CompareTag("enemy")){
			SceneManager.LoadScene ("EndScene");
		}
		if (other.gameObject.CompareTag("Portal1")) {
			SceneManager.LoadScene("Level2");
		}
		if (other.gameObject.CompareTag("Portal2")) {
			SceneManager.LoadScene("YouWinScene");
		}
	}
}