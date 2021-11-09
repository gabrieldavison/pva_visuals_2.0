(ns hclj.set
  (:require [hclj.macro :refer [h]]))

(defn init []
  (js/console.log "initialize SET"))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Sets up webcam on output o3
(. js/s0 (initCam 1))
(h (src s0) (saturate 0) (out o3))

;; UNTETHERED

;; start slow
(h (osc 60 0.005)
   (mult (h (osc 70 0.01)))
   (contrast 1.5)
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (out))

;; ;; faster --when 303 comes in
(h (osc 60 0.05)
   (mult (h (osc 100 0.01)))
   (contrast 2)
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (out))

;; ;; even faster scrolling
(h (osc 60 0.5)
   (mult (h (osc 70 0.01)))
   (contrast 5)
   (blend (h (src o0)))
   (blend (h (src o0)))
   (out))

(h (osc 60 0.5)
   (mult (h (osc 70 0.01)))
   (contrast 5)
   (blend (h (src o0)))
   (add (h (src o0)))
   (blend (h (src o0)))
   (out))

;; ;; fast almost strobing
(h (osc 80 1)
   (mult (h (osc 70 0.01)))
   (contrast 5)
   (out))

;; ;; inverted
(h (osc 20 1)
   (add (h (osc 7 0.01)))
   (contrast 5)
   (out))

;; ;; DIVINE INTERVENTION ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def di-mult 1)

;; ;; start
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.1)
   (modulate o0 #(get-fft 0 di-mult))
   (scale 1.01)
   (blend o0)
   (contrast 2)
   (out o0))

;; ;; pixelated above
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.1)
   (pixelate 10 10)
   (modulate o0 #(get-fft 0 di-mult))
   (scale 1.01)
   (blend o0)
   (contrast 2)
   (out o0))

;; ;; Pixelated above, high contrast
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.1)
   (pixelate 10 10)
   (modulate o0 #(get-fft 0 di-mult))
   (scale 1.01)
   (blend o0)
   (contrast 2)
   (out o0))

;; ;; washy distorted version
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.7)
   (modulate o0 #(get-fft 0 di-mult))
   (modulate (h (src o0) (colorama 10)) 0.1)
   (scale 1.01)
   (blend o0)
   (out o0))

;; ;; washy distorted version
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.7)
   (modulate o0 #(get-fft 0 di-mult))
   (modulate (h (voronoi 100)) 0.5)
   (scale 1.01)
   (blend o0)
   (out o0))

;; ;; TALKS  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def tlk-mult 1)

;; ;; start
(h (shape (array 3 3 3 4 4 4 2 2 2))
   (scale #(+ 1.5 (get-fft 0 tlk-mult)))
   (diff (h (osc 3 0.5 0.1)
            (diff (h (voronoi 2)
                     (pixelate 100 100)
                     (kaleid 2)))) )
   (modulate o0 0.1)
   (color 0.9 0.5 0.5)
   (saturate 2)
   (out))

;; ;; glitched
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

;; ;; Comfort Eating ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ce-mult 30)

;; ;; start - single shape
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

;; ;; multiple shapes
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
   (out))

;; ;; multi shapes glitch
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
   (out))

;; ;; multi shapes strobe
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
   (out))

;; ;; PROJECT BUNKER  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def pb-mult 0.05)

;; ;; dark camera
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
   (modulate o0 0.01)
   (contrast 2)
   (out))

;; ;; inverted camera
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
   (modulate o0 0.1)
   (contrast 2)
   (invert)
   (out))

;; ;; inverted camera dark
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
   (modulate o0 0.1)
   (contrast 2)
   (diff (h (src o3) (invert)))
   (out))

;; ;; Glitch Bars
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(get-fft 0 pb-mult))
   (modulate o0 0.5)
   (diff (h (noise 100)  (pixelate 1)))
   (contrast 2)
   (out))

;; ;; Glitch bars strobe
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
   (out))

;; ;; camera distorted
(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (out))

;; ;; camera distorted inverted
(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (invert)
   (out))

;; ;; camera very distorted
(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (invert)
   (modulate (h (src o3)))
   (out))

;; ;; SOAP  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def sp-mult 0.5)

;; ;; colored 3d noise
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise 5) (pixelate 100 100)))
   (modulate o0 #(get-fft 0 sp-mult))
   (saturate 2)
   (out))

;; ;; colored noise pixelates
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise (. (array 1 5 2) (fast 2))) (pixelate 50 50)))
   (modulate o0 0.5)
   (saturate 2)
   (out))

;; ;; noise audio reactive
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise (array 5 7 2)) (pixelate 100 100)))
   (modulate o0 #(get-fft 0 sp-mult))
   (saturate 2)
   (out))

(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise 1) (pixelate 50 50)))
   (modulate o0 0.5)
   (saturate 2)
   (out))

;; ;; noise inverted bright
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (diff (h (noise 5) (pixelate 100 100)))
   (modulate o0 #(get-fft 0 sp-mult))
   (saturate 2)
   (out))

;; ;; colored noise birght glitched
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise 2) (pixelate 100 100)))
   (modulate o0 #(get-fft 0 sp-mult))
   (invert)
   (colorama 0.001)
   (out))

;; ;; more glitched
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 2))0.2)
   (mult (h (noise 4) (pixelate 100 100)))
   (modulate o0 #(get-fft 0 sp-mult))
   (invert)
   (colorama 0.001)
   (out))

;; ;; Sleek form  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(h (osc 10 3 0)
   (contrast 2)
   (out))

;; ;; Darker / less contrast version
(h (osc 10 10 0)
   (contrast 2)
   (modulate (h (src o3)))
   (invert)
   (out))

;; ;; Light high contrast
(h (osc 10 10 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; ;; Strobe
(h (osc 3 50 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

(h (osc 3 50 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; ;; strobe audio reactive
(h (osc 3 50 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)) #(get-fft 0 5))
   (diff o0)
   (contrast 2)
   (out))

;; ;; Light non-strobe
(h (osc 20 2 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; ;; Inverted version of above. Darker, maybe looks better
(h (osc 20 2 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (invert)
   (out))

;; ;; Strobing version of above
(h (osc 20 2 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (mult (h (osc 10 10) (pixelate 1 1)))
   (out))

;; ;; Exhaust  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ;; start
(h (osc 10 0.1)
   (modulate (h (noise 6)) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 0.9)
   (contrast 1.5)
   (out))

;; ;; kick synced -- bring in with ellas vox
(h (osc 10 0.1)
   (modulate (h (noise #(get-fft 0 20))) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 0.9)
   (contrast 1.5)
   (out))

;; ;; above but pixelated / synced
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
   (out))

;; ;; bring in with major chorus
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
   (out))

;; ;; Bring in for later chorus
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
   (out))

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
   (out))

;; ;; Above but much brighter
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
   (out o0))

;; ;;SPEED CONTROLS

;; (set! js/speed 10)
;; (set! js/speed 0.5) ;; Original



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
   (out o0))

(h (osc 10 0.1 0.8)
   (modulate (h (noise 6)) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 1.2)
   (contrast 1.5)
   (mult o3)
   (modulate o0 0.08)
   (modulate (h (voronoi 2)))
   (modulate (h (src o0) (invert)))
   (out))

;; ;; FADE TO BLACK ;;;;;;;;;;;;;;;
