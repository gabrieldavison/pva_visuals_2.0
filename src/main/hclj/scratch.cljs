(ns hclj.scratch
  (:require [hclj.macro :refer [h]]))

(defn init []
  (js/console.log "init"))

;; Sets up inputs and outputs
(def o0 js/o0)
(def o1 js/o1)
(def o2 js/o2)
(def o3 js/o3)

(def s0 js/s0)
(def s1 js/s1)
(def s2 js/s2)
(def s3 js/s3)

;; Sets up webcam on s0
(. js/s0 (initCam 1))
(h (src s0) (saturate 0) (out o3))


;; This is what the macro expands to
(.. js/window (osc 100 0.1 1.2) (modulate (. js/window osc 10)) (out))

(h (osc 40 0.1 1.3) (out))


;; UNTETHERED
;; start
(h (osc 60 0.005)
   (mult (h (osc 70 0.01)))
   (contrast 1.5)
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (out))
;; faster
(h (osc 60 0.05)
   (mult (h (osc 100 0.01)))
   (contrast 2)
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (blend (h (src o0)))
   (out))
;; even faster scrolling
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

;; fast almost strobing
(h (osc 80 1)
   (mult (h (osc 70 0.01)))
   (contrast 5)
   (out))

; inverted
(h (osc 20 1)
   (add (h (osc 7 0.01)))
   (contrast 5)
   (out))

;; Testing Sound
;(.. js/a show)
;; (js/console.log (nth js/a.fft 0))
(defn get-fft []
  (nth js/a.fft 0))
;; (js/console.log (get-fft))
;; (h (osc (fn [] (* 10 (get-fft))))
;;    (diff (h (src o3)) 0.2)
;;    (out))

;; Something here for divine intervention
;; Need a more washy / pulsating one to transition into
(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.1)
   (modulate o0 #(get-fft))
   (scale 1.01)
   (blend o0)
   (contrast 2)
   (out o0))

(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.1)
   (pixelate 10 10)
   (modulate o0 #(get-fft))
   (scale 1.01)
   (blend o0)
   (out o0))

(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.7)
   (modulate o0 #(get-fft))
   (modulate (h (src o0) (colorama 10)) 0.1)
   (scale 1.01)
   (blend o0)
   (out o0))

(h (osc 20, 0.02, 0.9)
   (color 1 0.4 1)
   (kaleid (array 4 8 3 6))
   (rotate 0 0.7)
   (modulate o0 #(get-fft))
   (modulate (h (voronoi 100)) 0.5)
   (scale 1.01)
   (blend o0)
   (out o0))



;; Not sure what to use this one for but it looks really sick. Maybe for near the end?
(h (voronoi 5)
   (pixelate 200 200)
   (blend o0)
   (add o0)
   (blend o0)
   (diff (h (osc 20 0.02 #(get-fft)) (kaleid 20)))
   (out))

;; Talks, keep geometric, these ones kind of suck
(h (shape 4)
   (diff (h (solid 0.1 0.7 0.6)))
   (scrollX 0.8 0.01)
   (scale (array 0.5 3 1 0.1))
   (modulate (h (voronoi 5)))
   (modulate o0)
   (blend o0)
   (blend o0)
   (modulate o0 0.05)
   (blend o0)
   (saturate 1.1)
   (contrast 1.01)
   (out))

(h (shape 4)
   (diff (h (solid 0.1 0.7 0.6)))
   (scrollX 0.8 0.01)
   (scale (array 0.5 3 1 0.1))
   (modulate (h (voronoi 5)))
   (blend o0)
   (modulate o0 0.05)
   (blend o0)
   (saturate 1.1)
   (contrast 1.01)
   (modulate (h (src o3) (contrast 10)) 1.5)
   (out))

(h (noise 5) (contrast 2) (out))

(h (shape (array 3 4 2 10))
   (repeatX 2)
   (repeatY 2)
   (scrollY 3 0.05)
   (scrollX 10 0.05)
   (modulate (h (osc 3 0.2 0.2)
            (diff (h (voronoi 1) (saturate 0)))))
   (blend o0)
   (blend o0)
   (blend o0)
   (blend o0)
   (scale #(+ 1 (get-fft)))
   (contrast 1)
   (color 0.8 0.5 0.8)
   (out o0))

;; This is my favourite one for talks, maybe a mixture of this one and the one above.
(h (shape (array 3 3 3 4 4 4 2 2 2))
   (scale #(+ 1.5 (get-fft)))
   (diff (h (osc 3 0.5 0.1)
            (diff (h (voronoi 2)
                     (pixelate 100 100)
                     (kaleid 2)))) )
   (modulate (h (src o3)) 0.5) ;; For adding in camera
   (modulate o0 0.1)
   (color 0.7 0.5 0.7)
   (saturate 2)
   (out))

;; Comfort Eating --more hard edged with a floaty transition and a strobing transition.
(h (osc 10 0.005 0)
   (contrast 200)
   (kaleid 4)
   (blend (h (solid 0.9 0 0.01) (modulate (h (noise 10)))) 0.9)
   (out))

;; I like this one more
;; Can gradually increase the shape count

(h (noise 5)
   (invert)
   (contrast 10)
   (mult (h (solid 0.7 0.1 0.15)))
   (blend (h (shape (. (array 2 5 100) (fast 0.5)))
             (scale 1.8)
             (repeatX 1)
             (repeatY 1)
             (contrast 2)
             (modulate (h (voronoi #(* 30 (get-fft)))))))
   (out))

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
             (modulate (h (voronoi #(* 30 (get-fft)))))))
   (out))

(h (noise 5)
   (invert)
   (contrast 5)
   (pixelate 50 50)
   (mult (h (solid 0.7 0.1 0.15)))
   (blend (h (shape (. (array 2 5 100) (fast 4)))
             (scale 1.8)
             (repeatX 3)
             (repeatY 3)
             (modulate (h (voronoi #(* 30 (get-fft)))))))
   (modulate o0)
   (out))

(h (noise 5)
   (invert)
   (contrast 5)
   (pixelate 50 50)
   (mult (h (solid 0.7 0.1 0.15)))
   (blend (h (shape (. (array 2 5 100) (fast 4)))
             (scale 1.8)
             (repeatX 3)
             (repeatY 3)
             (modulate (h (voronoi #(* 30 (get-fft)))))))
   (modulate o0)
   (diff (h (osc 30) (modulate (h(osc 10 0.01))) (pixelate 1 1) (contrast 4)))
   (out))

;; Cool camera effect
;; Project Bunker

(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(* 0.05 (get-fft)))
   (modulate o0 0.01)
   (contrast 2)
   (out))

(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(* 0.05 (get-fft)))
   (modulate o0 0.1)
   (contrast 2)
   (invert)
   (out))

(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(* 0.05 (get-fft)))
   (modulate o0 0.1)
   (contrast 2)
   (diff (h (src o3) (invert)))
   (out))

;; Glitch Bars (maybe start with this)
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(* 0.2 (get-fft)))
   (modulate o0 0.5)
   (diff (h (noise 100)  (pixelate 1)))
   (contrast 2)
   (out))

;; Glitch bars strobe
(h (src o3)
   (contrast 1.2)
   (modulate (h (noise 1000)) #(* 0.2 (get-fft)))
   (modulate o0 0.5)
   (diff (h (noise 100)  (pixelate 1)))
   (contrast 2)
   (blend (h (osc 50 0.5)
             (contrast 2)
             (pixelate 1 1)))
   (out))

(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (out))

(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (invert)
   (out))

;; Washier version of above
(h (src o3)
   (contrast 1.8)
   (diff (h (noise 10) (pixelate 1) (modulate o0 0.5)))
   (invert)
   (modulate (h (src o3)))
   (out))

;; SOAP
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise 5) (pixelate 100 100)))
   (modulate o0 #(* 0.5 (get-fft)))
   (out))

(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise (. (array 1 5 2) (fast 2))) (pixelate 50 50)))
   (modulate o0 0.5)
   (out))

(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise (array 5 7 2)) (pixelate 100 100)))
   (modulate o0 #(* 0.5 (get-fft)))
   (out))

;; Birhgter version of clouds
(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (diff (h (noise 5) (pixelate 100 100)))
   (modulate o0 #(* 0.5 (get-fft)))
   (out))

(h (osc 10 0.15 0.3)
   (add (h (osc 4, 0.2 0.8)))
   (modulate (h (noise 10)))
   (mult (h (noise 2) (pixelate 100 100)))
   (modulate o0 #(* 0.5 (get-fft)))
   (invert)
   (colorama 0.001)
   (out))

;; Sleek form

(h (osc 10 3 0)
   (contrast 2)
   (out))

;; Darker / less contrast version
(h (osc 10 10 0)
   (contrast 2)
   (modulate (h (src o3)))
   (invert)
   (out))
;; Light high contrast
(h (osc 10 10 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; Strobe
(h (osc 3 50 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; Light non-strobe
(h (osc 20 2 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (out))

;; Inverted version of above. Darker, maybe looks better
(h (osc 20 2 0)
   (contrast 2)
   (invert)
   (modulate (h (src o3)))
   (diff o0)
   (contrast 2)
   (invert)
   (out))

;; Exhaust

(h (osc 10 0.1)
   (modulate (h (noise 6)) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 0.9)
   (contrast 1.5)
   (out))


(h (osc 10 0.1 0.4)
   (modulate (h (noise 6)) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 1.2)
   (contrast 1.5)
   (modulate o0 0.008)
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
   (modulate (h (voronoi 10) (pixelate 50 50)) 0.3)
   (out))


;; Above but with camera
(h (osc 10 0.1 0.4)
   (modulate (h (noise 6)) 0.2)
   (diff (h (src o0)))
   (modulateScrollY (h (osc 2)
                       (modulate (h (osc)
                                    (rotate)) 0.11)))
   (scale 1.2)
   (diff o3)
   (modulate (h (src o0)) 0.008)
   (out))

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
