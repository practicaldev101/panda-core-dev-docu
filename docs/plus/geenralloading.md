---
sidebar_position: 14
---

# General Loading 

In case you need to load and block the page, you can use our global state for this.
```tsx
  import { loadingAtom } from '@core/store/Common'
 
  /// ...

  const [, setLoading] = useAtom(loadingAtom)

  function yourFetch() {
    setLoading(true)
    /// your code...
  }
```


You will see a loading layout with your logo and loading css animation.


<img src={'/ss/loading.png'} style={{width: 400}} />


:::tip
If you need to change the style just go to `components/molecules/LoadingModal.tsx`
:::
