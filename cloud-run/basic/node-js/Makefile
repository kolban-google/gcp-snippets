build:
	gcloud builds submit --tag gcr.io/kolban-test/helloworld
	gcloud beta run deploy helloworld \
		--image gcr.io/kolban-test/helloworld \
		--platform managed \
		--allow-unauthenticated \
		--region us-central1
