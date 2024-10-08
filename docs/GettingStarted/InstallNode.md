## Install Node

To get started initially, you can run the Naptha SDK using a hosted node. 

When you're ready to run your own node, please reach out the Naptha team at team@naptha.ai. We'll add you to the [Naptha Node](https://github.com/NapthaAI/node) repository. With the installation script, it's super easy to set up and takes about 5 minutes to install on a fresh instance. 

From source:

```bash
git clone https://github.com/NapthaAI/node.git
cd node
```

Then run the node:

```bash
bash launch.sh
```

This will install all of the components, including:
- Python 3.12 (pre-Requirement)
- Poetry (manages dependencies)
- SurrealDB (Naptha Protocol info is stored here)
- RabbitMQ (message-broker for the Naptha Protocol)
- Ollama (used to run LLMs)
- Docker (isolates Modules from the system)
- Naptha node (orchestrates ML workflows)

The first time you launch, you will be prompted about whether (i) to generate a private key, and (ii) to input a Stability API key, which is needed if you would like to run the image module examples. If you choose not to, you can always edit the .env file manually later.

After a few minutes you should see,```[System] Setup complete. Applications are running.```

Then, in a new terminal window run:

```bash
journalctl -u nodeapp -n 100 -f
```

That's it! You're now running a local AI node.

If you want to use the SDK with your local node, change ```NODE_URL=http://localhost:7001``` in the .env file.