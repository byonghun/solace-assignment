# Notes
- For this assessment, my main goal was to improve the user experience. With the 2 hours development time limit, I was able to improve the interface with a simple design but my main focus was improving the experience for the user. 

## How to test
```
git fetch
git checkout develop
npm i
npm run dev
```

### User Experience Improvements
- Removed Search button since typing automatically filters advocates.
- Replaced Reset button with x button inside the input.
- Implemented highlight feature that highlights searched queries within the table.

### What I would improve with more time
- The UI of the application. Currently, it's just a simple search input and a table. There's a lot more that can be improved, but in a professional setting, I'd work with a designer in order to make it more visually appealing.

### Areas for Continued Exploration
- Backend Improvements: With the time limit, I was not able to focus on the backend. But with more time, I would have wanted to implement/add features such as pagination.
- Fixing backend issues.

### PRs
- Here is how I set up the PRs.
  - `main`: Initial code
  - `develop`: Contains all the merged PRs -> current stable branch. **Please use to test.**
- All **new** features/fixes exists in `develop` branch.
- **PRs to `main` remain open** to provide visibility and assessment, even though the code is already merged into `develop`.
  - **Note:** You'll notice PRs that includes commits/features from previously merged branches since I branched off of `develop`.

- `upgrade/next-14.2.31`: https://github.com/byonghun/solace-assignment/pull/1
  - Locks in to 14.2.31 which is most stable next 14.
  - Upgrade from 14.2.19 -> 14.2.31 to account for vulnerabilities.
- `bugfix/ui-issues`: https://github.com/byonghun/solace-assignment/pull/5
  - Fixes UI hydration mismatch issues due to missing `tr`.
  - Add advocate types.
  - Fix search.
- `feature/advocate-search`: https://github.com/byonghun/solace-assignment/pull/7
  - Remove Search button since typing automatically filters advocates.
  - Replace Reset button with x button inside the input.
  - Implement highlight feature that highlights searched queries within the table.
- `develop`: https://github.com/byonghun/solace-assignment/pull/3
  - Merges latest `develop` into `main`.
- [WIP]`chore/backend-fixes`: https://github.com/byonghun/solace-assignment/pull/8
  - WIP branch and the PR is in draft mode.