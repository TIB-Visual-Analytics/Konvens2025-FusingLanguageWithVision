---
# Banner
banner:
  title: "Fusing Vision and Language"
  subtitle: "A Tutorial on Vision-Language Models for Multimodal Content Analysis"
  image: "/images/banner.png"
---

## Summary
The increasing availability of multimodal data, including images and videos, has led to a surge of interest in multimodal models that combine visual and textual information. This tutorial will provide an in-depth introduction to the latest advances in multimodal models, with a focus on large vision-language models. Through a combination of theoretical explanations, code demonstrations, and hands-on exercises, participants will learn how to apply these models to a range of image and video analysis tasks, including image captioning, visual concept detection, and image retrieval. By the end of the tutorial, attendees will have a solid understanding of the strengths and limitations of these models, enabling them to implement their own multimodal applications.

## Programm

This tutorial will take **half a day** (a total of **4 hours**) and will be presented **in person**. The tutorial slides can be found [here](https://docs.google.com/presentation/d/1ATnXBuYWkKQ7Oba0ItJAnU5ex9jbJpTK/edit?usp=sharing&ouid=105794554671820119952&rtpof=true&sd=true), and all associated notebooks are listed at the bottom of the page.

- **13:30 - 13:45** [Welcome Session](#welcome-session)
- **13:45 - 15:30** [From Language and Vision to Vision-Language Models](#from-language-and-vision-to-vision-language-models)
- **15:30 - 16:00** Coffee Break
- **16:00 - 17:30** [Generative AI and Video Analysis](#generative-ai-and-video-analysis)
- **17:30 - 18:00** [Discussion and Closing Session](#discussion-and-closing-session)

### Welcome Session

- **Welcome**  
- **Background** of the Research Group Visual Analytics 
- **Resources:** Sharing tutorial resources with participants  

### From Language and Vision to Vision-Language Models

#### Overview Natural Language Processing (NLP)
- Recurrent Neural Network (RNN)
- Long Short-Term Memory (LSTM)
- Attention Mechanism & Transformer
  
#### Overview Computer Vision (CV)
- Convolutional Neural Network (CNN)
- Vision Transformer (ViT)

#### "Fusion" of Text and Images
- Types of Multimodal Fusion Strategies
- Language-supervised Learning (CLIP: Contrastive Language-Image Pretraining)

#### Demo Session
- [Classification and Retrieval using CLIP](https://colab.research.google.com/drive/1tDwBohNyz0mE7xKAAgScNpJrQEU1rmZc)

**Classification Tasks**

1. What happens if the image shows a concepts that is not in the dictionary?
2. Experiment with negative prompts alongside positive prompts, e.g., “not a photo of a cat”, “photo of a dog” 
3. Experiment with synonymous prompts, e.g., “a photo of a cat”, “a photo of a kitty”
4. Experiment with prompts with visual attributes, e.g., “a red car”, “a black car”

**Retrieval Tasks**

1. Retrieve images based on 3-5 query images
   1. Are the results meaningful?
   2. What kind of similarity do you think CLIP is measuring?
2. Retrieve images using ~5 simple prompts (This is a photo of <class>)
   1. How would you rate the results? 
   2. Are the results intuitive and explainable?
3. Try to formulate more advanced prompts, e.g., by adding a short description of the concept
   1. Do the results improve?
   2. Can these act as a filter for the search results?
4. What can we do to improve search results and explainability?

**Domain Adaptation**
[Finetuning CLIP with LoRA](https://colab.research.google.com/drive/1HVf9xsvJsoN4_CHxwZxqaAQynYT2L69F)

### Generative AI and Video Analysis

#### Generative AI
- From Large Language Models (LLMs) to Large Vision-language Models (LVLMs)/Multimodal LLMs (MLLMs)
- Foundations, use cases, and benchmarks of MLLMs

#### Demo Session on Large Vision-Language Models (LVLMs)

**Tasks**

1. Pick several tasks from the MMBench benchmark dataset and assess the quality of results!
2. Compare multiple LVLMs such as InstructBLIP, Qwen2.5-VL, and InternVL!
3. Compare the results for various prompt types!
   1. What are the advantages and disadvantages of the prompt types?
   2. Try multiple choice prompts but change the order of the options. What do you notice?
4. Try to extract overlaid text from images using LVLMs!
   1. How would you rate the quality of the output? 
   2. Can you extract equations from lecture videos? 
   3. Try using the overlaid text as additional context for task 1!
5. Try to extract structured information from data visualizations (e.g., bar charts) with LVLMs!

#### From Images to Videos

- Temporal Pooling
- X-CLIP
- Video Transformers
- Video LLMs

#### Demo Session on TIB AV-Analytics (TIB-AV-A)

Link to TIB AV-Analytics: https://service.tib.eu/tibava

### Discussion and Closing Session

- Questions from the participants
- Networking


## Contact

### Eric Müller-Budack

Email: [eric.mueller@tib.eu](mailto:eric.mueller@tib.eu)

Eric Müller-Budack is leading the Visual Analytics Research Group at TIB – Leibniz Information Centre for Science and Technology. He received his PhD from the Leibniz University Hannover in 2021. His main research interests include automatic multimedia indexing, multimedia and multimodal information retrieval, and deep learning for multimedia analysis and retrieval.

### Sushil Awale 

Email: [sushil.awale@tib.eu](mailto:sushil.awale@tib.eu)

Sushil Awale is a research associate in the Visual Analytics research group at TIB – Leibniz Information Centre for Science and Technology and a third-year PhD student at Leibniz Universität Hannover. His research interests center on multimodal modeling and information retrieval.