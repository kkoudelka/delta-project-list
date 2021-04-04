# Delta Matura Project List

This is a website containing Delta - SŠIE matura projects

## Getting Started

```bash
npm install
# or
yarn install

# then

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding project to a class

- Navigate to `src/projects/classes`
- Navigate to folder for your class (e.g. `20-21`)

### Class file

- Create a file for your class if it doesn't already exist (e.g. `A20-21.ts`)
- This file should have a structure like this:

```ts
import { ITrida } from  "../../../models/types";

const A2021: ITrida = {
	title: "4.A - 2020/2021",
	unique: "A20-21",
	domain: "delta-www.cz",
	projects: [ ... ]
};

export default A2021;

```

- Change it according to your needs.
- Add your class to array of all classes in `src/projects/classes.ts`

### Project

- `projects` in `ITrida` is an array of `IProject`
- IProject looks like this:

```ts
interface IProject {
  title: string; //title of the project (required)
  authorName: string; // author of the project (required)
  consultantName?: string; // name of the lead consultant (optional, default is "")
  subdomain: string; // subdomain of the project (e.g. b2016koudka) (required)
  https?: boolean; // does the web support https (optional, default is false)
  inRoot?: boolean; // web is in root instead of /maturita (optional, default is false)
}
```

## Creating new out-of-context entry

- Add your out of context image file to `public/out-of-context` (make sure the image name is unique)
- Then navigate to `src/out-of-context/index.ts`
- Add your entry to `ooc` array
- An entry looks like this:

```ts
interface IOutOfContext {
  imageName: string; // name of the image file you added to public/out-of-context (e.g. lol1.png) (required)
  description?: string; // description of the image (optional)
  nsfw?: boolean; // is image nsfw? (optional, default is false)
}
```
