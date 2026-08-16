# Project Submission Report

## 1. Student Details

- **Full Name:** Simplicious Wachira
- **GitHub Username:** SIMPLICIOUSWACH
- **Email:** Simplicious.Wachira@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/shelf-162965/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/shelf-162965/commit/f3265ea
- **Why this one?** The type tag matches what the change actually does, the subject is imperative and under fifty characters, and the body explains why a token layer exists rather than restating the diff. The `Closes #2` footer linked it to its tracking issue, so the issue closed and the milestone advanced automatically on merge.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/shelf-162965/pull/20
- **What happened and how did you recover?** I enabled "Require approvals" on the branch protection rule before opening my first pull request. Because GitHub prohibits approving your own pull request, PR #20 returned a status of `REVIEW_REQUIRED` and could not be merged by any route short of an administrator override. I recovered by setting the required approval count to zero while keeping the pull request requirement itself in place, which preserves the traceability the rule exists for without creating a condition that a single contributor can never satisfy.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/shelf-162965/pull/30
- **What did you check before merging?** I verified that every `data-genre` value in the markup matched a `data-filter` value on a button, and that `aria-pressed` was serving as both the state store and the CSS hook so the visual and announced states cannot drift apart. I also confirmed the catalogue degrades to showing all cards if the script fails to load.

### D. One Thing You Would Do Differently

- **What would you change?**I would have committed the .nojekyll addition with a conventional type tag and a subject under fifty characters, moving the explanation into the commit body where it belongs. It is the only commit in my history that breaks the convention I applied everywhere else, and it happened because I wrote the messag
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/shelf-162965/commit/d46de81

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

<img width="740" height="266" alt="image" src="https://github.com/user-attachments/assets/2dc381f5-5662-47c5-bdff-a4b1af31b748" />



* **Caption:** Three milestones representing the project's development phases, with nineteen granular issues distributed across them and each issue linked to its milestone before implementation began.

### B. Project Board

<img width="935" height="312" alt="image" src="https://github.com/user-attachments/assets/b0326e3e-92ee-4b7f-a626-a7f4ae1846fb" />



* **Caption:** The Kanban board with issues distributed across To Do, In Progress, and Done. Cards were moved to In Progress before each branch was created and to Done only after the corresponding pull request merged.

### C. Branching Architecture

<img width="938" height="352" alt="image" src="https://github.com/user-attachments/assets/f25248be-4d0d-4e51-93ae-c394e649c80b" />



* **Caption:** Feature branches named by commit type and issue number, using `feat/`, `fix/`, `style/`, `chore/`, and `docs/` prefixes. No development occurred directly on `main`.

### D. Pull Requests & Traceability

<img width="659" height="200" alt="image" src="https://github.com/user-attachments/assets/b803e2c8-0681-4c7b-9958-cc66123ae8d1" />



* **Caption:** Pull request #33, "feat: build reader view layout", which closes issue #14 through a Closes reference in both the commit footer and the pull request description.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent modification of the same line by two branches.

#### Step 1: Generating the Clash

<img width="506" height="173" alt="image" src="https://github.com/user-attachments/assets/23de8401-474c-4825-b112-c8cd46204c38" />




* **Caption:** `style/22-deepen-accent-colour` merging `main`, which by then contained `style/21-warm-accent-colour`. Both branches were cut from the same commit and both altered the `--colour-accent` declaration, producing `CONFLICT (content): Merge conflict in css/variables.css`.

#### Step 2: Inside the Code Editor (Conflict Markers)

<img width="1429" height="606" alt="image" src="https://github.com/user-attachments/assets/eac16485-2b0d-4ea9-83f7-1108ebbe2051" />



* **Caption:** Git can determine that both sides changed the same line relative to their common ancestor, but not which value was intended, so it writes both into the file between `<<<<<<< HEAD`, `=======`, and `>>>>>>> main` markers. I resolved in favour of the incoming value because the declaration sits inside the dark theme block, where the darker candidate would not have met contrast requirements against the near-black background.

#### Step 3: Resolution & Clean Merge

<img width="834" height="449" alt="Screenshot 2026-08-16 213309" src="https://github.com/user-attachments/assets/c20f7149-f6b4-4075-88c1-b2370e96396d" />



* **Caption:** The commit graph after resolution, showing the two lines of history diverging from their shared parent and rejoining at the merge commit. The branch then merged into `main` through a pull request without further conflict.

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete  `chore/23-remove-unused-stylesheet` deleted `css/layout.css` while `style/24-extend-layout-utilities` modified it.

**Why does this cause trigger a conflict?** A three-way merge compares each side against the common ancestor. One side contributes content changes and the other contributes the file's absence, and there is no rule for deciding whether an edit to a deleted file should survive, since either outcome discards work. Git therefore escalates the decision rather than guessing.

<img width="1738" height="760" alt="image" src="https://github.com/user-attachments/assets/1dc60221-d212-4873-8b91-ebc6af5417a7" />



* **Caption:** `CONFLICT (modify/delete): css/layout.css deleted in main and modified in HEAD`, with `git status` reporting the unmerged path as "deleted by them". Unlike a content conflict, this type produces no in-file markers — Git records the dispute in the index and leaves the working tree copy untouched, because there is no competing version of the content to interleave. I resolved by staging the file, retaining it, since it holds the container and grid rules every page depends on.

---

### Conflict 3 — Different Cause

**What cause did you use?** Add/add — `feat/25-add-print-styles` and `feat/26-add-print-stylesheet` each independently created `css/print.css`.

**Why does this cause trigger a conflict?** A three-way merge needs a common ancestor version to diff against. Because the file did not exist in the merge base, Git has no baseline from which to compute what either side changed and cannot distinguish an addition from a modification. It presents both versions in full and leaves reconciliation to the developer.

<img width="850" height="790" alt="image" src="https://github.com/user-attachments/assets/7a97d86f-cb6f-45e2-8081-fea6c9ea68b0" />



* **Caption:** Both print stylesheets rendered in full between conflict markers, with no shared content between them. Because the two rule sets were complementary rather than contradictory  one hiding site chrome and the other setting print typography  I resolved by combining both into a single media query.

---

## 6. Feedback & Evaluation

- [x] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)
