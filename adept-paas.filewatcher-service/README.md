# adept-paas.filewatcher-service

This sftp file watcher service will look customer directories on our shared domain and whenever there is new file uploaded by our customers in their associated directories, it will run the particular script mentioned in the config. 

## Folders

  * etc - Contains a sample configuration file ( `file-watcher.config.json` )
        - Contains a service configuration(`service.config.json`) file which is used to identify on which domain "adept-paas.filewatcher-service" is running.

# Configuring the service

Configuration of this services is done throught a **JSON** file with the following schema: 
```
{ 
	domains  : {Object}
}
```

The **domains** property contains a list of *domain keys* and associated directories to watch and a script to run in the form of: 
```
"{domain_key}: {
			"watch_dir": [
				"/Users/ajayvekariya/Documents/SosuvConsulting/filewatcher/watch_dir"
			],
			"script": "/Users/ajayvekariya/Documents/SosuvConsulting/filewatcher/fileWatcher_scripts/uploadFileToCustomerDomain/uploadFileToCustomerDomainScript.js",
			"opts": {
				"host": "172.24.18.12",
				"username": "root",
				"password": "W3!com301",
				"drop_location": "/home/temp"
			}
		},
```
Where: 
* ***{domain_key}*** is the *domain key* for a specific customer
* **watch_dir** is an array of directories to watch for that customer
* **script** is the script to run when any file upload on watch_dir
* **opts** is an object of options which used in script

## A sample configuration

The contents of the  `file-watcher.config.json` is below:
```
{
	"domains": {
		"cela": {
			"watch_dir": [
				"/Users/ajayvekariya/Documents/SosuvConsulting/filewatcher/watch_dir"
			],
			"script": "/Users/ajayvekariya/Documents/SosuvConsulting/filewatcher/sftp-filewatcher-scripts/uploadFileToCustomerDomain/uploadFileToCustomerDomainScript.js",
			"opts": {
				"host": "172.24.18.12",
				"username": "root",
				"password": "W3!com301",
				"drop_location": "/home/temp"
			}
		},
		"cfgl": {
			"watch_dir": [
				"/home/karthik/sftp-fileWatcher/cfgl_domain"
			],
			"script": "...",
			"opts": {
				"host": "172.24.18.12",
				"username": "root",
				"password": "W3!com301",
				"drop_location": "/home/cfgl_watch_dir"
			}
		},
		"606": {
			"watch_dir": [
				"/home/karthik/sftp-fileWatcher/606_domain"
			],
			"script": "...",
			"opts": {
				"host": "172.24.18.12",
				"username": "root",
				"password": "W3!com301",
				"drop_location": "/home/606_watch_dir"
			}
		},
		"wedb": {
			"watch_dir": [
				"/home/karthik/sftp-fileWatcher/wedbdomain"
			],
			"script": "...",
			"opts": {
				"host": "172.24.18.12",
				"username": "root",
				"password": "W3!com301",
				"drop_location": "/home/wedb_watch_dir"
			}
		}
	}
}
```


## A sample "service.config.json" file configuration

```
{
    "loggerDomain":"SFTPFileWatcherController",
    "serviceModControllerName" :"ADEPT(tm) SFTP Filewatcher Service",
    "processName":"SFTPFileWatcherController"
}

```

## Running the service

```node index.js```

