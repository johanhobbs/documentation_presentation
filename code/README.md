# [Code Comments: Best Practices](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/)

## **Rule 1**: Avoid Redundant Comments

- Don't duplicate the code in comments.
- Avoid practices like `i = i + 1; // Add one to i`.
- Over-commenting can cause visual clutter and maintenance overhead.

## **Rule 2**: Clarity Over Comments

- Comments shouldn't replace clear code.

```csharp
private static Node getBestChildNode(Node node) {
    Node n; // best child node candidate
    for (Node node: node.getChildren()) {
        // update n if the current state is better
        if (n == null || utility(node) > utility(n)) {
            n = node;
        }
    }
    return n;
}
```

```csharp
private static Node getBestChildNode(Node node) {
    Node bestNode;
    for (Node currentNode: node.getChildren()) {
        if (bestNode == null || utility(currentNode) > utility(bestNode)) {
            bestNode = currentNode;
        }
    }
    return bestNode;
}
```

## **Rule 3**: Unclear Comments Indicate Unclear Code

- If you can't explain it in a comment, consider rewriting the code.
- Complex code should be understandable without relying on the comment.

> "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." - Brian Kernighan

### **Rule 4**: Comments Should Clarify, Not Confuse

- Avoid cryptic comments like `k = 1750  // RIPJSB`.

### **Rule 5**: Explain Unidiomatic Code

- Comment code that looks redundant but is essential.
- Avoid commenting common idioms unless teaching novices.

```javascript
let isRaining = true;
// If it's raining, stay indoors, otherwise go for a walk
let activity = isRaining ? "Stay indoors" : "Go for a walk";
```

### **Rule 6**: Reference Source for Copied Code

- Credit sources like Stack Overflow when using external code. [Stack Overflow Blog Post](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/)
- Include links to the original sources.

### **Rule 7**: External References at Point of Need

- Link to standards or documentation where relevant.

### **Rule 8**: Document Bug Fixes

- Add comments when fixing bugs.
- Reference issue trackers if possible.

### **Rule 9**: Mark Incomplete Code with TODOs

- Use `TODO` for known limitations or future work.

### **Nifty comments vs code extension**

![better comments](image.png)
