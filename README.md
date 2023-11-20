<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>BLACKBAZAR</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat-square&logo=Next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/Kubernetes-123786.svg?style=flat-square&logo=Kubernetes&logoColor=white" alt="Kubernetes" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb" alt="Mongodb" />
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat-square&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat-square&logo=Bootstrap&logoColor=white" alt="Bootstrap" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat-square&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=flat-square&logo=Stripe&logoColor=white" alt="Stripe" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/MrJeyhun/blackbazar?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/MrJeyhun/blackbazar?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/MrJeyhun/blackbazar?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/MrJeyhun/blackbazar?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📂 repository Structure](#-repository-structure)
- [🤝 Contributing](#-contributing)
---


## 📂 Repository Structure

```sh
└── blackbazar/
    ├── .github/
    │   └── workflows/
    │       ├── deploy-auth.yml
    │       ├── deploy-client.yml
    │       ├── deploy-expiration.yml
    │       ├── deploy-manifests.yml
    │       ├── deploy-orders.yml
    │       ├── deploy-payments.yml
    │       ├── deploy-tickets.yml
    │       ├── tests-auth.yml
    │       ├── tests-orders.yml
    │       ├── tests-payments.yml
    │       └── tests-tickets.yml
    ├── .prettierignore
    ├── auth/
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src/
    │   │   ├── app.ts
    │   │   ├── index.ts
    │   │   ├── models/
    │   │   ├── routes/
    │   │   ├── services/
    │   │   ├── test/
    │   │   └── types/
    │   └── tsconfig.json
    ├── client/
    │   ├── .eslintrc.json
    │   ├── Dockerfile
    │   ├── api/
    │   │   └── buildClient.js
    │   ├── components/
    │   │   └── Header.jsx
    │   ├── hooks/
    │   │   └── useRequest.js
    │   ├── next.config.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── pages/
    │       ├── _app.jsx
    │       ├── auth/
    │       ├── index.jsx
    │       ├── orders/
    │       └── tickets/
    ├── expiration/
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src/
    │   │   ├── __mocks__/
    │   │   ├── events/
    │   │   ├── index.ts
    │   │   ├── nats-wrapper.ts
    │   │   └── queues/
    │   └── tsconfig.json
    ├── infra/
    │   ├── k8s/
    │   │   ├── auth-depl.yaml
    │   │   ├── auth-mongo-depl.yaml
    │   │   ├── client-depl.yaml
    │   │   ├── expiration-depl.yaml
    │   │   ├── expiration-redis-depl.yaml
    │   │   ├── nats-depl.yaml
    │   │   ├── orders-depl.yaml
    │   │   ├── orders-mongo-depl.yaml
    │   │   ├── payments-depl.yaml
    │   │   ├── payments-mongo-depl.yaml
    │   │   ├── tickets-depl.yaml
    │   │   └── tickets-mongo-depl.yaml
    │   ├── k8s-dev/
    │   │   └── ingress-srv.yaml
    │   └── k8s-prod/
    │       └── ingress-srv.yaml
    ├── nats-test/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src/
    │   │   ├── events/
    │   │   ├── listener.ts
    │   │   └── publisher.ts
    │   └── tsconfig.json
    ├── orders/
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src/
    │   │   ├── __mocks__/
    │   │   ├── app.ts
    │   │   ├── events/
    │   │   ├── index.ts
    │   │   ├── models/
    │   │   ├── nats-wrapper.ts
    │   │   ├── routes/
    │   │   └── test/
    │   └── tsconfig.json
    ├── payments/
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src/
    │   │   ├── __mocks__/
    │   │   ├── app.ts
    │   │   ├── events/
    │   │   ├── index.ts
    │   │   ├── models/
    │   │   ├── nats-wrapper.ts
    │   │   ├── routes/
    │   │   ├── stripe.ts
    │   │   └── test/
    │   └── tsconfig.json
    ├── skaffold.yaml
    └── tickets/
        ├── Dockerfile
        ├── package-lock.json
        ├── package.json
        ├── src/
        │   ├── __mocks__/
        │   ├── app.ts
        │   ├── events/
        │   ├── index.ts
        │   ├── models/
        │   ├── nats-wrapper.ts
        │   ├── routes/
        │   └── test/
        └── tsconfig.json

```
---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/MrJeyhun/blackbazar/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/MrJeyhun/blackbazar/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/MrJeyhun/blackbazar/issues)**: Submit bugs found or log feature requests for MRJEYHUN.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---
