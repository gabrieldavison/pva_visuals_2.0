(ns hclj.set2
  (:require [hclj.macro :refer [h]]
            [hclj.midi :refer [start-midi s set-button clear-buttons]]
            [hclj.kb :refer [setup-kb set-k]] ))

(defn init []
  (js/console.log "initialize SET 2"))

;; Sets up inputs and outputs
(def o0 js/o0)
(def o1 js/o1)
(def o2 js/o2)
(def o3 js/o3)

(def s0 js/s0)
(def s1 js/s1)
(def s2 js/s2)
(def s3 js/s3)

(defn get-fft [band multiplier]
  (* multiplier (nth js/a.fft band)))

(setup-kb)
(start-midi)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Sets up webcam on output o3
(. js/s0 (initCam 1))
(h (src s0) (out o3))

(defn setup-cameras []

  ;; b/w progression
  (set-button 56 (fn []
                   (h (src s0)
                      (saturate 0)
                      (out o3))))
  (set-button 57 (fn []
                   (h (src s0)
                      (saturate 0)
                      (contrast 3)
                      (out o3))))
  (set-button 58 (fn []
                   (h (src s0)
                      (contrast 1.5)
                      (saturate 0)
                      (modulate o0 0.03)
                      (out o3))))
  (set-button 59 (fn []
                   (h (src s0)
                      (contrast 1.5)
                      (saturate 0)
                      (modulate o0 0.07)
                      (invert)
                      (out o3))))

  ;; color progression
  (set-button 48 (fn []
                   (h (src s0)
                      (saturate 0.6)
                      (out o3))))
  (set-button 49 (fn []
                   (h (src s0)
                      (contrast 3)
                      (saturate 0.6)
                      (out o3))))
  (set-button 50 (fn []
                   (h (src s0)
                      (contrast 1.5)
                      (saturate 0.8)
                      (modulate o0 0.03)
                      (out o3))))
  (set-button 51 (fn []
                   (h (src s0)
                      (contrast 1.5)
                      (saturate 0.8)
                      (modulate o0 0.06)
                      (out o3))))
  (set-button 52 (fn []
                   (h (src s0)
                      (contrast 1.5)
                      (modulate o0 0.07)
                      (invert)
                      (out o3))))
  (h (src o1)
     (blend (h (src o3)) #(s :slider1 0 1))
     (out o0))
  )

(defn clear-sketch []
  (clear-buttons)
  (setup-cameras))

;; UNTETHERED
(defn untethered []
  (clear-sketch)
  (set-button 0 (fn []
                  (h (osc 60 0.005)
                     (mult (h (osc 70 0.01)))
                     (contrast 1.5)
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (out o1))
                  ))
  (set-button 1 (fn []
                  (h (osc 60 0.05)
                     (mult (h (osc 100 0.01)))
                     (contrast 2)
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (out o1))
                  ))
  (set-button 2 (fn []
                  (h (osc 60 0.5)
                     (mult (h (osc 70 0.01)))
                     (contrast 5)
                     (blend (h (src o0)))
                     (blend (h (src o0)))
                     (out o1))
                  ))
  (set-button 3 (fn []
                  (h (osc 80 1)
                     (mult (h (osc 70 0.01)))
                     (contrast 5)
                     (out o1))
                  ))
  (set-button 4 (fn []
                  (h (osc 20 1)
                     (add (h (osc 7 0.01)))
                     (contrast 5)
                     (out o1))
                  )))

;; DIVINE INTERVENTION

(defn divine-intervention []
  (let [di-mult 1]
    (clear-sketch)
    ;; gemetric shapes
    (set-button 0 (fn []
                    (h (osc 20, 0.02, 0.9)
                       (color 1 0.4 1)
                       (kaleid (array 4 8 3 6))
                       (rotate 0 0.1)
                       (modulate o0 #(get-fft 0 di-mult))
                       (scale 1.01)
                       (blend o0)
                       (contrast 2)
                       (out o1))
                    ))
    ;; pixelated
    (set-button 1 (fn []
                    (h (osc 20, 0.02, 0.9)
                       (color 1 0.4 1)
                       (kaleid (array 4 8 3 6))
                       (rotate 0 0.1)
                       (pixelate 10 10)
                       (modulate o0 #(get-fft 0 di-mult))
                       (scale 1.01)
                       (blend o0)
                       (contrast 2)
                       (out o1))
                    ))
    ;;washy distorted
    (set-button 2 (fn []
                    (h (osc 20, 0.02, 0.9)
                       (color 1 0.4 1)
                       (kaleid (array 4 8 3 6))
                       (rotate 0 0.7)
                       (modulate o0 #(get-fft 0 di-mult))
                       (modulate (h (src o0) (colorama 10)) 0.1)
                       (scale 1.01)
                       (blend o0)
                       (out o1))
                    ))
    ;; fully distorted
    (set-button 3 (fn []
                    (h (osc 20, 0.02, 0.9)
                       (color 1 0.4 1)
                       (kaleid (array 4 8 3 6))
                       (rotate 0 0.7)
                       (modulate o0 #(get-fft 0 di-mult))
                       (modulate (h (voronoi 100)) 0.5)
                       (scale 1.01)
                       (blend o0)
                       (out o1))
                    ))))

;; TALKS
(defn talks []
  (let [tlk-mult 1]
    (clear-sketch)
    (set-button 0 (fn []
                    (h (shape (array 3 3 3 4 4 4 2 2 2))
                       (scale #(+ 1.5 (get-fft 0 tlk-mult)))
                       (diff (h (osc 3 0.5 0.1)
                                (diff (h (voronoi 2)
                                         (pixelate 100 100)
                                         (kaleid 2)))) )
                       (modulate o0 0.1)
                       (color 0.9 0.5 0.5)
                       (saturate 2)
                       (out))))
    (set-button 1 (fn []
                    (h (shape (array 3 3 3 4 4 4 2 2 2))
                       (scale #(+ 1.5 (get-fft 0 tlk-mult)))
                       (diff (h (osc 3 0.5 0.1)
                                (diff (h (voronoi 2)
                                         (pixelate 100 100)
                                         (kaleid 2)))) )
                       (modulate o0 0.5)
                       (contrast 2)
                       (color 0.7 0.5 0.7)
                       (saturate 2)
                       (out))
                    ))))

;; COMFORT EATING
(defn comfort-eating []
  (let [ce-mult 30]
    (clear-sketch)
    (set-button 0 (fn []
                    (h (noise 5)
                       (invert)
                       (contrast 10)
                       (mult (h (solid 0.7 0.1 0.15)))
                       (blend (h (shape (. (array 2 5 100) (fast 0.5)))
                                 (scale 1.8)
                                 (repeatX 1)
                                 (repeatY 1)
                                 (contrast 2)
                                 (modulate (h (voronoi #(get-fft 0 30))))))
                       (out))
                    ))
    (set-button 1 (fn []
                    (h (noise 5)
                       (invert)
                       (contrast 5)
                       (pixelate 50 50)
                       (mult (h (solid 0.7 0.1 0.15)))
                       (blend (h (shape (. (array 2 5 100) (fast 4)))
                                 (scale 1.8)
                                 (repeatX 3)
                                 (repeatY 3)
                                 (contrast 2)
                                 (modulate (h (voronoi #(get-fft 0 30))))))
                       (out))))
    (set-button 2 (fn []
                    (h (noise 5)
                       (invert)
                       (contrast 5)
                       (pixelate 50 50)
                       (mult (h (solid 0.7 0.1 0.15)))
                       (blend (h (shape (. (array 2 5 100) (fast 4)))
                                 (scale 1.8)
                                 (repeatX 3)
                                 (repeatY 3)
                                 (modulate (h (voronoi #(get-fft 0 30))))))
                       (modulate o0)
                       (out))))
    (set-button 3 (fn []
                    (h (noise 5)
                       (invert)
                       (contrast 5)
                       (pixelate 50 50)
                       (mult (h (solid 0.7 0.1 0.15)))
                       (blend (h (shape (. (array 2 5 100) (fast 4)))
                                 (scale 1.8)
                                 (repeatX 3)
                                 (repeatY 3)
                                 (modulate (h (voronoi #(get-fft 0 30))))))
                       (modulate o0)
                       (diff (h (osc 30 0.2) (modulate (h(osc 10 0.01))) (pixelate 1 1) (contrast 4)))
                       (out))))
    ))

(defn project-bunker []
  (let [pb-mult 0.05]
    (clear-sketch)
    (set-button 0 (fn []
                    (h (src o3)
                       (contrast 1.2)
                       (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
                       (modulate o0 0.01)
                       (contrast 2)
                       (out o1))
                    ))
    (set-button 1 (fn []
                    (h (src o3)
                       (contrast 1.2)
                       (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
                       (modulate o0 0.1)
                       (contrast 2)
                       (invert)
                       (out o1))))
    (set-button 2 (fn []
                    (h (src o3)
                       (contrast 1.2)
                       (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
                       (modulate o0 0.1)
                       (contrast 2)
                       (diff (h (src o3) (invert)))
                       (out o1))))
    (set-button 3 (fn []
                    (h (src o3)
                       (contrast 1.2)
                       (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
                       (modulate o0 0.5)
                       (diff (h (noise 100)  (pixelate 1)))
                       (contrast 2)
                       (out o1))
                    ))
    (set-button 4 (fn []
                    (h (src o3)
                       (contrast 1.2)
                       (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
                       (modulate o0 0.5)
                       (diff (h (noise 100)  (pixelate 1)))
                       (contrast 2)
                       (blend (h (osc 50 0.5)
                                 (contrast 2)
                                 (pixelate 1 1)))
                       (contrast 2)
                       (out o1))
                    ))
    (set-button 5 (fn []
                    (h (src o3)
                       (contrast 1.8)
                       (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
                       (out o1))
                    ))
    (set-button 6 (fn []
                    (h (src o3)
                       (contrast 1.8)
                       (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
                       (invert)
                       (out o1))
                    ))
    (set-button 7 (fn []
                    (h (src o3)
                       (contrast 1.8)
                       (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
                       (invert)
                       (modulate (h (src o3)))
                       (out o1))
                    ))
    ))

;; SOAP
(defn soap []
  (let [sp-mult 0.5]
    (clear-sketch)
    (set-button 0 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 10)))
                       (mult (h (noise 5) (pixelate 100 100)))
                       (modulate o0 #(get-fft 0 sp-mult))
                       (saturate 2)
                       (out o1))
                    ))
    (set-button 1 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 10)))
                       (mult (h (noise (. (array 1 5 2) (fast 2))) (pixelate 50 50)))
                       (modulate o0 0.5)
                       (saturate 2)
                       (out o1))
                    ))
    ;; audio reactive
    (set-button 2 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 10)))
                       (mult (h (noise (array 5 7 2)) (pixelate 100 100)))
                       (modulate o0 #(get-fft 0 sp-mult))
                       (saturate 2)
                       (out o1))
                    ))
    (set-button 3 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 10)))
                       (diff (h (noise 5) (pixelate 100 100)))
                       (modulate o0 #(get-fft 0 sp-mult))
                       (saturate 2)
                       (out o1))
                    ))
    (set-button 4 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 10)))
                       (mult (h (noise 2) (pixelate 100 100)))
                       (modulate o0 #(get-fft 0 sp-mult))
                       (invert)
                       (colorama 0.001)
                       (out o1))
                    ))
    (set-button 5 (fn []
                    (h (osc 10 0.15 0.3)
                       (add (h (osc 4, 0.2 0.8)))
                       (modulate (h (noise 2))0.2)
                       (mult (h (noise 4) (pixelate 100 100)))
                       (modulate o0 #(get-fft 0 sp-mult))
                       (invert)
                       (colorama 0.001)
                       (out o1))
                    ))
    ))

;;SLEEK FORM
(defn sleek-form []
  (clear-sketch)
  (set-button 0 (fn []
                  (h (osc 10 3 0)
                     (contrast 2)
                     (out o1))
                  ))
  (set-button 1 (fn []
                  (h (osc 10 10 0)
                     (contrast 2)
                     (modulate (h (src o3)))
                     (invert)
                     (out o1))
                  ))
  (set-button 2 (fn []
                  (h (osc 10 10 0)
                     (contrast 2)
                     (invert)
                     (modulate (h (src o3)))
                     (diff o0)
                     (contrast 2)
                     (out o1))
                  ))
  (set-button 3 (fn []
                  (h (osc 3 50 0)
                     (contrast 2)
                     (invert)
                     (modulate (h (src o3)))
                     (diff o0)
                     (contrast 2)
                     (out o1))
                  )))

;;EXHAUST
(defn exhaust []
  (clear-sketch)
  (set-button 0 (fn []
                  (h (osc 10 0.1)
                     (modulate (h (noise 6)) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 0.9)
                     (contrast 1.5)
                     (out o1))
                  ))
  (set-button 1 (fn []
                  (h (osc 10 0.1)
                     (modulate (h (noise #(get-fft 0 20))) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 0.9)
                     (contrast 1.5)
                     (out o1))
                  ))
  (set-button 2 (fn []
                  (h (osc 10 0.1)
                     (modulate (h (noise #(get-fft 0 20))) 0.2)
                     (diff (h (src o0)) 0.9)
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 0.9)
                     (blend (h (src o0)
                               (colorama 0.001)
                               (saturate 0.5)
                               (pixelate (. (array 20 10 50) (fast 10))  (. (array 4 10 20) (fast 10))))
                            #(get-fft 0 4))
                     (contrast 1.5)
                     (out o1))
                  ))

  (set-button 3 (fn []
                  (h (osc 10 0.1 0.4)
                     (modulate (h (noise 6)) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 1.2)
                     (contrast 1.5)
                     (modulate o0 0.01)
                     (scale 1)
                     (out o1))
                  ))

  (set-button 4 (fn []
                  (h (osc 10 0.1 0.4)
                     (modulate (h (noise 6)) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 1.2)
                     (contrast 1.5)
                     (modulate o0 0.001)
                     (modulate (h (voronoi 10) (pixelate (array 5 10 20) (array 15 30 2)) (contrast 2)) 0.2)
                     (out o1))
                  ))

  (set-button 5 (fn []
                  (h (osc 10 0.1 0.4)
                     (modulate (h (noise 6)) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 1.2)
                     (contrast 1.5)
                     (modulate o0 0.001)
                     (modulate (h (voronoi 10)
                                  (pixelate
                                   (. (array 5 10 20 80 1) (fast 10))
                                   (. (array 15 30 2 1) (fast 7)))
                                  (contrast 2) ) 0.2)
                     (out o1))
                  ))
  (set-button 6 (fn []
                  (h (osc 10 0.1 0.4)
                     (modulate (h (noise 6)) 0.2)
                     (diff (h (src o0)))
                     (modulateScrollY (h (osc 2)
                                         (modulate (h (osc)
                                                      (rotate)) 0.11)))
                     (scale 1.2)
                     (contrast 1.5)
                     (modulate o0 0.002)
                     (modulate (h (voronoi 10) (pixelate 50 #(+ 10 (get-fft 0 20)))) 0.3)
                     (add o0)
                     (out o1))
                  )))

(set-k 1 #(untethered))
(set-k 2 #(divine-intervention))
(set-k 3 #(soap))
(set-k 4 #(project-bunker))
(set-k 5 #(sleek-form))
(set-k 6 #(exhaust))



(h (solid 0 0 0) (out o1))
(setup-cameras)
