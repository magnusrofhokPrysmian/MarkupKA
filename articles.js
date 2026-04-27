//articles.js

const articleTable = [
  {
    "Description": "U-FXKJ-F 1x240/35 F4 12kV",
    "Articlenumber": 20114152
  },
  {
    "Description": "U-FXKJ-F 1x500/35 F4 12kV",
    "Articlenumber": 20114153
  },
  {
    "Description": "U-FXKJ-F 1x630/35 F4 12kV",
    "Articlenumber": 20114154
  },
  {
    "Description": "U-TXXP 1x400 AFR",
    "Articlenumber": 20114585
  },
  {
    "Description": "PEX-CU-LRT 1x630+50 52kV",
    "Articlenumber": 20114741
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x35/16 FR 24kV",
    "Articlenumber": 20164336
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x70/16 FR 24kV",
    "Articlenumber": 20164338
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x120/25 FR 24kV",
    "Articlenumber": 20164340
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x400/35 FR 24kV",
    "Articlenumber": 20164342
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x630/50 FR 24kV",
    "Articlenumber": 20164343
  },
  {
    "Description": "XIK-PE-CL 1x185 3,6kV",
    "Articlenumber": 20135687
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x50/16AFR+50CU 24kV",
    "Articlenumber": 20162354
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x50/16 FR 24kV",
    "Articlenumber": 20164344
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x95/25 FR 24kV",
    "Articlenumber": 20164345
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x150/25 FR 24kV",
    "Articlenumber": 20164346
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x240/35 FR 24kV",
    "Articlenumber": 20164347
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x300/35 FR 24kV",
    "Articlenumber": 20164348
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x70/16 FR 24kV",
    "Articlenumber": 20164350
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x120/25 FR 24kV",
    "Articlenumber": 20164351
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x185/35 FR 24kV",
    "Articlenumber": 20164352
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x500/35 FR 24kV",
    "Articlenumber": 20164353
  },
  {
    "Description": "U-MOTORKABEL 1x258 61,5kV",
    "Articlenumber": 20259549
  },
  {
    "Description": "U-AXQ 3G70 F4 SEKT",
    "Articlenumber": 20167915
  },
  {
    "Description": "U-AXQ 4G50 F4 SEKT",
    "Articlenumber": 20167921
  },
  {
    "Description": "U-TSLP 1x300 FR/35 HALVFABR 24kV",
    "Articlenumber": 20168442
  },
  {
    "Description": "FXC-F PPL 1x95 LT RED 24kV",
    "Articlenumber": 20205347
  },
  {
    "Description": "FXC-F PPL 1x95 LT BLUE 24kV",
    "Articlenumber": 20205348
  },
  {
    "Description": "FXC-F PPL 1x95 LT YELLOW 24kV",
    "Articlenumber": 20205349
  },
  {
    "Description": "FX 1x16 GR�",
    "Articlenumber": 1000074953
  },
  {
    "Description": "U-AXCLJ-TT 3x240/35 CU HALVFABR 24kV",
    "Articlenumber": 20215703
  },
  {
    "Description": "U-AXCLJ-TT 3x240/35 CU HALVFABR 12kV",
    "Articlenumber": 20215702
  },
  {
    "Description": "U-AXCLJ-TT 3x240/35 CU HALVFABR 12kV",
    "Articlenumber": 20216005
  },
  {
    "Description": "U-AXCLJ-TT 3x240/35 CU HALVFABR 24kV",
    "Articlenumber": 20216006
  },
  {
    "Description": "AXCL-FCL 1x400/30 TT BLUE 36kV",
    "Articlenumber": 20237361
  },
  {
    "Description": "AXCL-FCL 1x400/30 TT YELLOW 36kV",
    "Articlenumber": 20247420
  },
  {
    "Description": "AXCL-FCL 1x400/30 TT RED 36kV",
    "Articlenumber": 20247421
  },
  {
    "Description": "U-AXALJ-TT 3x400/50 AL 24kV",
    "Articlenumber": 20366030
  },
  {
    "Description": "EXP CULE 240 F37 RU KOMP LT Subsea",
    "Articlenumber": 1000063027
  },
  {
    "Description": "EXP FX-F 1x400 LT 36kV Subsea",
    "Articlenumber": 1000063028
  },
  {
    "Description": "EXP AXQJ 4x95/29 F4 SEKT",
    "Articlenumber": 20113588
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 1000063246
  },
  {
    "Description": "EXP SE-N1XE-AS 4G50",
    "Articlenumber": 20113789
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 1000063353
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4B 24kV",
    "Articlenumber": 20121912
  },
  {
    "Description": "EXP AXQJ-F 1x240/35 LT F4B 24kV",
    "Articlenumber": 20126548
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4B 24kV",
    "Articlenumber": 20126662
  },
  {
    "Description": "EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 1000066880
  },
  {
    "Description": "U-EXP MONOSILPART 1x95",
    "Articlenumber": 1000067200
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4B 24kV",
    "Articlenumber": 20133028
  },
  {
    "Description": "U-EXP AX-F 1x50 LT 12kV",
    "Articlenumber": 1000067779
  },
  {
    "Description": "EXP AXAJL-TT 3x95/35 AL 24kV",
    "Articlenumber": 20137023
  },
  {
    "Description": "U-EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 1000068083
  },
  {
    "Description": "EXP AXLJ-RMF 3x240/25 LT 24kV",
    "Articlenumber": 20137944
  },
  {
    "Description": "EXP AXLJ-RMF 3x240/25 LT 24kV",
    "Articlenumber": 20137945
  },
  {
    "Description": "U-EXP AX-F 1x95 LT 36kV",
    "Articlenumber": 1000068134
  },
  {
    "Description": "EXP SE-N1XE-AS 4G50",
    "Articlenumber": 20138425
  },
  {
    "Description": "U-EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 1000068165
  },
  {
    "Description": "EXP AXAJL-TT 3x240/50 AL 24kV",
    "Articlenumber": 20139295
  },
  {
    "Description": "U-EXP AX-F 1x800 LT 36kV",
    "Articlenumber": 1000068479
  },
  {
    "Description": "U-EXP MOTORKABEL 1x258 61,5kV",
    "Articlenumber": 20140843
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 24kV",
    "Articlenumber": 20140722
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G95",
    "Articlenumber": 20141109
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x150/25 AFR 12kV",
    "Articlenumber": 20142218
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 AL 24kV",
    "Articlenumber": 20147633
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 AL 12kV",
    "Articlenumber": 20149824
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20147634
  },
  {
    "Description": "EXP AXALJ-TT 3x50/25 AL 24kV",
    "Articlenumber": 20147635
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 12kV",
    "Articlenumber": 20149381
  },
  {
    "Description": "U-EXP CULE 50 F7 RU KOMP LT Subsea",
    "Articlenumber": 1000071401
  },
  {
    "Description": "EXP AXALJ-TT 3x150/35 AL 12kV",
    "Articlenumber": 20149825
  },
  {
    "Description": "EXP AXALJ-TT 3x150/35 AL 24kV",
    "Articlenumber": 20149827
  },
  {
    "Description": "EXP AXALJ-TT 3x50/25 AL 12kV",
    "Articlenumber": 20149826
  },
  {
    "Description": "U-EXP AXLJ-TT 3x240/35 12kV",
    "Articlenumber": 20153000
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x400/35 AFR 24kV",
    "Articlenumber": 20153011
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 36kV",
    "Articlenumber": 20153012
  },
  {
    "Description": "U-EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 1000072011
  },
  {
    "Description": "U-EXP AX-F 1x120 LT 36kV",
    "Articlenumber": 1000071983
  },
  {
    "Description": "U-EXP SABIC 318BJ & SABIC B5210",
    "Articlenumber": 1000071849
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G95",
    "Articlenumber": 20154276
  },
  {
    "Description": "U-EXP LE8707 & SEIT 2300",
    "Articlenumber": 1000072192
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20154389
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20154390
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20154974
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20156640
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20156772
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 12kV",
    "Articlenumber": 20156773
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 AL 12kV",
    "Articlenumber": 20156774
  },
  {
    "Description": "U-EXP HFFR DHF 9855-0100",
    "Articlenumber": 1000072535
  },
  {
    "Description": "EXP AXQJ-RMF 3x50/16 LT F4 24kV",
    "Articlenumber": 20157549
  },
  {
    "Description": "EXP FXCL-FCL 1x630/31 TT L1 36kV",
    "Articlenumber": 20158116
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4 24kV",
    "Articlenumber": 20158328
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4 24kV",
    "Articlenumber": 20162162
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 AL 36kV",
    "Articlenumber": 20163566
  },
  {
    "Description": "EXP AXALJ-TT 3x150/35 AL 36kV",
    "Articlenumber": 20163567
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 36kV",
    "Articlenumber": 20163568
  },
  {
    "Description": "EXP AXALJ-TTCL 3x95/35 AL 36kV",
    "Articlenumber": 20163569
  },
  {
    "Description": "EXP FXCL-F 1x120 TT RED 36kV",
    "Articlenumber": 20163758
  },
  {
    "Description": "EXP FXCL-F 1x300 TT RED 36kV",
    "Articlenumber": 20163759
  },
  {
    "Description": "EXP FXCL-F 1x400 TT RED 36kV",
    "Articlenumber": 20163760
  },
  {
    "Description": "U-EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 1000073471
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4 24kV",
    "Articlenumber": 20163868
  },
  {
    "Description": "EXP AXLJ-RMF 3x50/16 LT 12kV",
    "Articlenumber": 20164653
  },
  {
    "Description": "EXP HE6062-AXELERON 6059",
    "Articlenumber": 1000073652
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G240",
    "Articlenumber": 20164629
  },
  {
    "Description": "EXP AXLJ-RMF 3x50/16 LT 12kV",
    "Articlenumber": 20164847
  },
  {
    "Description": "EXP ME6052",
    "Articlenumber": 1000073670
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x240/35 AFR F4 24kV",
    "Articlenumber": 20166718
  },
  {
    "Description": "U-EXP CULE 300 F61 RU KOMP LT Subsea",
    "Articlenumber": 1000073917
  },
  {
    "Description": "EXP NA2XS2Y 1x240 RM/25 24kV",
    "Articlenumber": 20166719
  },
  {
    "Description": "EXP PEX-AL-LRT 1x800+50 72kV",
    "Articlenumber": 20168120
  },
  {
    "Description": "U-EXP CULE 400 F60 RU KOMP LT Subsea",
    "Articlenumber": 1000074387
  },
  {
    "Description": "U-EXP CULE 240 F37 RU KOMP LT Subsea",
    "Articlenumber": 1000074388
  },
  {
    "Description": "EXP AXALJ-TT 3x25/25 AL 24kV",
    "Articlenumber": 20169213
  },
  {
    "Description": "EXP AXQJ 3x50/15 F4 SEKT",
    "Articlenumber": 20168776
  },
  {
    "Description": "EXP AXQJ 3x240/72 F4 SEKT",
    "Articlenumber": 20168777
  },
  {
    "Description": "EXP AXALJ-TT 3x25/25 AL 12kV",
    "Articlenumber": 20169214
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 36kV",
    "Articlenumber": 20169215
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95",
    "Articlenumber": 20169701
  },
  {
    "Description": "EXP PEX-AL-LRT 1x800+50 72kV",
    "Articlenumber": 20169725
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G50",
    "Articlenumber": 20169731
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G240",
    "Articlenumber": 20170187
  },
  {
    "Description": "EXP AXQJ 4x50/15 F4 SEKT",
    "Articlenumber": 20170671
  },
  {
    "Description": "EXP DFDK-6050 & PETROTHENE LR52800E",
    "Articlenumber": 20171535
  },
  {
    "Description": "EXQ-LIGHT Pro 3G2,5 R3",
    "Articlenumber": 20172263
  },
  {
    "Description": "EXP AX 1x50 12kV",
    "Articlenumber": 20172834
  },
  {
    "Description": "EXP AX 1x50 24kV",
    "Articlenumber": 20172847
  },
  {
    "Description": "EXP TFXP HFFR 4x50 AFV",
    "Articlenumber": 20173141
  },
  {
    "Description": "EXP HDPE+HFFR I EM47 F�R TSLI",
    "Articlenumber": 20172840
  },
  {
    "Description": "EXP LE0563 I EM45",
    "Articlenumber": 20174286
  },
  {
    "Description": "EXP PEX-ISOL AL-R�R 1x30/18 12kV",
    "Articlenumber": 20174284
  },
  {
    "Description": "EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 20175777
  },
  {
    "Description": "EXP AX-F 1x800 LT 36kV",
    "Articlenumber": 20175778
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 20175698
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95",
    "Articlenumber": 20175834
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x150/25 AFR 24kV",
    "Articlenumber": 20175837
  },
  {
    "Description": "EXP PEX-AL-LT 3x150+35 12kV",
    "Articlenumber": 20183316
  },
  {
    "Description": "EXP PEX-AL-LT 3x150+35 SPEC 12kV",
    "Articlenumber": 20183368
  },
  {
    "Description": "EXP FX-F 1x630 LT 36kV",
    "Articlenumber": 20183435
  },
  {
    "Description": "EXP FX-F 1x150 LT 36kV",
    "Articlenumber": 20183711
  },
  {
    "Description": "EXP AXCL-FCL 1x800 TT BLUE 36kV",
    "Articlenumber": 20183720
  },
  {
    "Description": "EXP AX-F 1X630 LT 24kV",
    "Articlenumber": 20184347
  },
  {
    "Description": "EXP AXCLJ-TT 3x300/35 24kV",
    "Articlenumber": 20193341
  },
  {
    "Description": "EXP AXCLJ-TT 3x240/35 36kV",
    "Articlenumber": 20193342
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 24kV",
    "Articlenumber": 20194794
  },
  {
    "Description": "EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 20195359
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x800/50 AFR F4 72kV",
    "Articlenumber": 20197934
  },
  {
    "Description": "EXP AXQJ-RMF 3x95/25 LT F4 12kV",
    "Articlenumber": 20198486
  },
  {
    "Description": "EXP FX-F 1x50 24kV",
    "Articlenumber": 20203169
  },
  {
    "Description": "EXP AXCLJ-TT 3x240/35 24kV",
    "Articlenumber": 20203308
  },
  {
    "Description": "EXP PEX-AL-LRT 1x800+50 72kV",
    "Articlenumber": 20204087
  },
  {
    "Description": "EXP AXQJ-RMF 3x95/25 LT F4 12kV",
    "Articlenumber": 20204296
  },
  {
    "Description": "EXP AXQJ 3x50/15 F4 SEKT",
    "Articlenumber": 20204297
  },
  {
    "Description": "EXP AXQJ-TT TSLI 1x50/16 AFR F4 12kV",
    "Articlenumber": 20204352
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G50",
    "Articlenumber": 20204491
  },
  {
    "Description": "EXP FX-F 1x240 LT 36kV",
    "Articlenumber": 20213674
  },
  {
    "Description": "EXP FX-F 1x95 LT 24kV",
    "Articlenumber": 20213675
  },
  {
    "Description": "EXP FX-F 1x150 LT 36kV",
    "Articlenumber": 20215729
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20217461
  },
  {
    "Description": "EXP AX 1x50 LT 24kV",
    "Articlenumber": 20217664
  },
  {
    "Description": "EXP AX 1x50 LT 24kV",
    "Articlenumber": 20217665
  },
  {
    "Description": "EXP AXCLJ-TT 3x240/35 36kV",
    "Articlenumber": 20218219
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x630/50 AFR 24kV",
    "Articlenumber": 20222745
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x50/16 FR 12kV",
    "Articlenumber": 20224355
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x240/35 FR 12kV",
    "Articlenumber": 20224356
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x50/16 FR 24kV",
    "Articlenumber": 20224357
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x300/35 FR 36kV",
    "Articlenumber": 20224358
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x70/25 FR 36kV",
    "Articlenumber": 20224359
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x50/16 LT 12kV",
    "Articlenumber": 20224528
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x50/16 LT 24kV",
    "Articlenumber": 20224529
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x240/35 LT 24kV",
    "Articlenumber": 20224530
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x50/16 LT 36kV",
    "Articlenumber": 20224531
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x240/35 LT 36kV",
    "Articlenumber": 20224532
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x240/35 AFR 24kV",
    "Articlenumber": 20227790
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 20234255
  },
  {
    "Description": "EXP AXQJ-RMF Pure 3x50/16 LT 12kV",
    "Articlenumber": 20234728
  },
  {
    "Description": "EXP AXALJ-TT 3x300/50 AL 36kV",
    "Articlenumber": 20235669
  },
  {
    "Description": "EXP ALLE 120 F19 RU KOMP LT",
    "Articlenumber": 20236198
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x95/25 AFR 36kV",
    "Articlenumber": 20258780
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x400/35 FR 24kV",
    "Articlenumber": 20258781
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x300/35 FR 12kV",
    "Articlenumber": 20258784
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x50/25 FR 36kV",
    "Articlenumber": 20258847
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x185/35 LT 36kV",
    "Articlenumber": 20258850
  },
  {
    "Description": "EXP PEX-AL-LT 3x95+25 FR 12kV",
    "Articlenumber": 20258851
  },
  {
    "Description": "EXP PEX-AL-CT RM 1x240+35 FR 12kV",
    "Articlenumber": 20258852
  },
  {
    "Description": "EXP MOTORKABEL 1x258 61,5kV",
    "Articlenumber": 20259551
  },
  {
    "Description": "EXP MOTORKABEL 1x232 60kV",
    "Articlenumber": 20259552
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x95/25 LT 24kV",
    "Articlenumber": 20259559
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x95/25 AFR 12kV",
    "Articlenumber": 20259603
  },
  {
    "Description": "EXP AXALJ-TT 3x300/50 AL 36kV",
    "Articlenumber": 20261359
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20262773
  },
  {
    "Description": "EXP FXQJ-RMF Pure 3x95/25 LT 12kV",
    "Articlenumber": 20267297
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x95/25 AFR 12kV",
    "Articlenumber": 20268692
  },
  {
    "Description": "EXP FXQJ-TT Pure TSLI 1x50/25 FR 36kV",
    "Articlenumber": 20268693
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95 CU",
    "Articlenumber": 20270617
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95 AL",
    "Articlenumber": 20270618
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G95",
    "Articlenumber": 20280470
  },
  {
    "Description": "EXP AX-F 1x50 LT 24kV",
    "Articlenumber": 20280518
  },
  {
    "Description": "EXP AXQJ-EMC Pure 4x50 AFV/16",
    "Articlenumber": 20281010
  },
  {
    "Description": "EXP EAXeCeWB 1x240/25 42kV",
    "Articlenumber": 20282418
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x800/50 AFR 36kV",
    "Articlenumber": 20287795
  },
  {
    "Description": "EXP AXQJ Pure 4x50/15",
    "Articlenumber": 20287802
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20289643
  },
  {
    "Description": "EXP AX-F 1x50 LT 24kV",
    "Articlenumber": 20290689
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 20291628
  },
  {
    "Description": "EXP EAXeCeWB 1x240/25 42kV",
    "Articlenumber": 20293842
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 20296918
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20297910
  },
  {
    "Description": "EXP AXLJ-RMF 3x240/35 LT 24kV",
    "Articlenumber": 20297909
  },
  {
    "Description": "EXP AXALJ-TTCL 3x150/35 AL 36kV",
    "Articlenumber": 20299076
  },
  {
    "Description": "EXP AXQJ-EMC Pure 4x50 AFV/16",
    "Articlenumber": 20299192
  },
  {
    "Description": "EXP AX-F 1x150 LT 12kV",
    "Articlenumber": 20299472
  },
  {
    "Description": "EXP FX-F 1x240 LT 36kV",
    "Articlenumber": 20311930
  },
  {
    "Description": "EXP AXCQJ-TT Pure 3x150/25 CU 24kV",
    "Articlenumber": 20312761
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20312881
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G95 SPEC",
    "Articlenumber": 20312965
  },
  {
    "Description": "EXP AXQ 1x240",
    "Articlenumber": 20328657
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20329842
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20331585
  },
  {
    "Description": "EXP PEX-AL-CT RM 1x95+25 36kV",
    "Articlenumber": 20332719
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20337894
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20337977
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20338023
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G240",
    "Articlenumber": 20338080
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20338083
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G240",
    "Articlenumber": 20338089
  },
  {
    "Description": "EXP FXQJ-EMC Pure 4x95 FV/50 N�ssj�",
    "Articlenumber": 20338408
  },
  {
    "Description": "EXP FXQJ-EMC Pure 4x95 FV/50 Keila",
    "Articlenumber": 20338407
  },
  {
    "Description": "EXP AXLJ-TT TSLE 1x500/35 AFR SPEC 24kV",
    "Articlenumber": 20340219
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95",
    "Articlenumber": 20341075
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV - EP41",
    "Articlenumber": 20344203
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV - EP43 Hanwha",
    "Articlenumber": 20344204
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV - EP43 DOW",
    "Articlenumber": 20344205
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x50/16 AFR GUL 12kV",
    "Articlenumber": 20346778
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/25 LT 12kV",
    "Articlenumber": 20347837
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 12kV",
    "Articlenumber": 20347838
  },
  {
    "Description": "EXP SE-N1XZ1-AS 4G95",
    "Articlenumber": 20350157
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20351560
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G240",
    "Articlenumber": 20351701
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x150/25 AFR 24kV",
    "Articlenumber": 20352523
  },
  {
    "Description": "EXP AMLJ-RMF 3x150/25 LT 24kV",
    "Articlenumber": 20352575
  },
  {
    "Description": "EXP AMCLJ-TT 3x150/25 24kV",
    "Articlenumber": 20352576
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20354730
  },
  {
    "Description": "EXP AXLJ-TT ALLGROUND RR 1x400 36kV",
    "Articlenumber": 20357886
  },
  {
    "Description": "EXP TSLE ALLGROUND 1x240/35 AFR 24kV",
    "Articlenumber": 20358541
  },
  {
    "Description": "EXP TSLE ALLGROUND 1x400/35 AFR 24kV",
    "Articlenumber": 20358542
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20359890
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 1000113984
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 1000113986
  },
  {
    "Description": "EXP AX-F 1x240 LT 12kV",
    "Articlenumber": 1000113985
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 1000113987
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95",
    "Articlenumber": 20362163
  },
  {
    "Description": "EXP SE-N1XE-AS ALLGROUND 4G95",
    "Articlenumber": 20363818
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95",
    "Articlenumber": 20367992
  },
  {
    "Description": "EXP AX-F 1x240 LT 12kV",
    "Articlenumber": 20368901
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 20368911
  },
  {
    "Description": "EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 20368882
  },
  {
    "Description": "EXP AX-F 1x25 LT 12kV",
    "Articlenumber": 20368921
  },
  {
    "Description": "EXP AX-F 1x50 LT 12kV",
    "Articlenumber": 20368847
  },
  {
    "Description": "EXP AX-F 1x50 LT 24kV",
    "Articlenumber": 20368926
  },
  {
    "Description": "EXP AX-F 1x400 LT 24kV",
    "Articlenumber": 20368894
  },
  {
    "Description": "EXP AX-F 1x400 LT 36kV",
    "Articlenumber": 20368895
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 20368934
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 20368950
  },
  {
    "Description": "EXP AX-F 1x630 LT 12kV",
    "Articlenumber": 20369031
  },
  {
    "Description": "EXP AX-F 1x150 LT 24kV",
    "Articlenumber": 20368995
  },
  {
    "Description": "EXP AX-F 1x630 LT 24kV",
    "Articlenumber": 20368977
  },
  {
    "Description": "EXP AX-F 1x150 LT 36kV",
    "Articlenumber": 20368978
  },
  {
    "Description": "EXP AX-F 1x150 LT 12kV",
    "Articlenumber": 20368988
  },
  {
    "Description": "EXP AX-F 1x400 LT 12kV",
    "Articlenumber": 20369075
  },
  {
    "Description": "EXP AX-F 1x630 LT 36kV",
    "Articlenumber": 20369062
  },
  {
    "Description": "EXP AX-F 1x120 LT 24kV",
    "Articlenumber": 20369105
  },
  {
    "Description": "EXP YMeKrvasdlwd 1x630 alrm as50 24kV",
    "Articlenumber": 20369270
  },
  {
    "Description": "EXP YMeKrvasdlwd 1x240 alrm as25 24kV",
    "Articlenumber": 20369269
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20369334
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x630/50 AFR 36kV",
    "Articlenumber": 20370949
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 12kV",
    "Articlenumber": 20370997
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x630/35 AFR 12kV",
    "Articlenumber": 20370908
  },
  {
    "Description": "EXP AXALJ-TT 3x400/50 AL 24kV",
    "Articlenumber": 20371228
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 12kV",
    "Articlenumber": 20373209
  },
  {
    "Description": "EXP YMeKrvasdlwd 1x630 alrm as50 24kV",
    "Articlenumber": 20373602
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 36kV",
    "Articlenumber": 20373544
  },
  {
    "Description": "EXP AXLJ-TTCL 1x630/95 72kV",
    "Articlenumber": 20376628
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20377589
  },
  {
    "Description": "EXP NA2XS(F)2Y 1x240 RM/25 24kV",
    "Articlenumber": 20377757
  },
  {
    "Description": "EXP FXCL-FSC 1x400 TT BLUE 36kV",
    "Articlenumber": 20378166
  },
  {
    "Description": "EXP FXCL-FSC 1x400 TT RED 36kV Hybrid",
    "Articlenumber": 20378167
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x1000/50 AFR 36kV",
    "Articlenumber": 20381315
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x1200/50 AFR 36kV",
    "Articlenumber": 20381318
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x1000/50 AFR 72kV",
    "Articlenumber": 20381317
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x1200/50 AFR 72kV",
    "Articlenumber": 20381316
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G95",
    "Articlenumber": 20381066
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G150",
    "Articlenumber": 20381266
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x800/50 AFR 24kV",
    "Articlenumber": 20381594
  },
  {
    "Description": "EXP EAXeCeWB 1x150/25 42kV",
    "Articlenumber": 20381378
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 20382094
  },
  {
    "Description": "EXP AX 1x95 LT 24kV",
    "Articlenumber": 20382375
  },
  {
    "Description": "EXP AX 1x150 LT 24kV",
    "Articlenumber": 20382348
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 36kV",
    "Articlenumber": 20382423
  },
  {
    "Description": "EXP AXALJ-TT 3x150/35 ALCL 36kV",
    "Articlenumber": 20384333
  },
  {
    "Description": "EXP ALLE 400 F59 RU KOMP LT",
    "Articlenumber": 1000117699
  },
  {
    "Description": "EXP AXLJ-RMF Shift 3x95/16 LT 12kV",
    "Articlenumber": 20386023
  },
  {
    "Description": "EXP YMeKrvaslqwd 1x630 alrm as50 24kV",
    "Articlenumber": 20386495
  },
  {
    "Description": "EXP AXALJ-TT 3x50/25 ALCL 24kV",
    "Articlenumber": 20387816
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 ALCL 12kV",
    "Articlenumber": 20388002
  },
  {
    "Description": "EXP AXALJ-TT 3x150/35 ALCL 12kV",
    "Articlenumber": 20387817
  },
  {
    "Description": "EXP AXALJ-TT 3x240/50 ALCL 12kV",
    "Articlenumber": 20388001
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x400/35 AFR 24kV",
    "Articlenumber": 20388474
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20388777
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 12kV",
    "Articlenumber": 20390074
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 ALCL 24kV",
    "Articlenumber": 20390422
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 20390444
  },
  {
    "Description": "EXP AXLJ-RMF Shift 3x95/16 LT 12kV",
    "Articlenumber": 20390815
  },
  {
    "Description": "EXP FXQJ-EMC Pure 3x25 FR/16",
    "Articlenumber": 20391561
  },
  {
    "Description": "EXP AXQJ Pure 4x50/15",
    "Articlenumber": 20391544
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 ALCL 12kV",
    "Articlenumber": 20397473
  },
  {
    "Description": "EXP YMeKrvaslqwd 3x240Alrm as50 20kV",
    "Articlenumber": 20397445
  },
  {
    "Description": "EXP YMeKrvaslqwd 1x630 alrm as50 24kV",
    "Articlenumber": 20402861
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x400/35 AFR 36kV",
    "Articlenumber": 20403371
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 12kV",
    "Articlenumber": 20408651
  },
  {
    "Description": "EXP AXLJ-TTCL 1x240/35 36kV",
    "Articlenumber": 20408748
  },
  {
    "Description": "EXP FXCL-FSC 1x400 TT YELLOW 36kV",
    "Articlenumber": 20409154
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20409381
  },
  {
    "Description": "EXP AXALJ-TT 3x50/25 ALCL 12kV",
    "Articlenumber": 20411021
  },
  {
    "Description": "EXP AXALJ-TT 3x300/50 ALCL 36kV",
    "Articlenumber": 20410838
  },
  {
    "Description": "EXP AXQJ Pure 4x150/41",
    "Articlenumber": 20412365
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20412471
  },
  {
    "Description": "EXP AXQJ-RMF Pure 3x50/16 LT 12kV",
    "Articlenumber": 20412462
  },
  {
    "Description": "EXP SE-N1XE-AS Shift 4G50 RT",
    "Articlenumber": 20414182
  },
  {
    "Description": "EXP SE-N1XE-AS Shift 4G95 RT",
    "Articlenumber": 20414664
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF-O 1x400/35 AFR 24kV",
    "Articlenumber": 20414702
  },
  {
    "Description": "EXP AXALJ-TT Shift 3x240/50 ALCL 24kV",
    "Articlenumber": 20415197
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 20416239
  },
  {
    "Description": "EXP AX-F 1x630 LT 12kV",
    "Articlenumber": 20416260
  },
  {
    "Description": "EXP AX-F 1x50 LT 36kV",
    "Articlenumber": 20416412
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 20416290
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 20416270
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 36kV",
    "Articlenumber": 20416417
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x240/35 AFR 36kV",
    "Articlenumber": 20416481
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x1000/50 AFR SPEC 72kV",
    "Articlenumber": 20416810
  },
  {
    "Description": "EXP AXLJ RR 1x95 24kV",
    "Articlenumber": 20422637
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x95/35 ALCL 24kV",
    "Articlenumber": 20423672
  },
  {
    "Description": "EXPAXLJ-TTCL TSLF PRY-ID1x240/35AFR 24kV",
    "Articlenumber": 20431149
  },
  {
    "Description": "EXP AX-F 1x800 LT 12kV",
    "Articlenumber": 20431049
  },
  {
    "Description": "EXP AX-F 1x500 LT 12kV",
    "Articlenumber": 20431274
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x95/35 ALCL 12kV",
    "Articlenumber": 20432096
  },
  {
    "Description": "EXP AXQJ-RMF Pure 3x50/16 LT 12kV",
    "Articlenumber": 20432476
  },
  {
    "Description": "EXP AXALJ-TT Eco Cable 3x50/25 ALCL 12kV",
    "Articlenumber": 20432868
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x240/35 AFR 12kV",
    "Articlenumber": 20434616
  },
  {
    "Description": "EXP AMLJ-RMF Eco Cable 3x240/25 LT 12kV",
    "Articlenumber": 20435103
  },
  {
    "Description": "EXP YMeKrvasdlwd 1x630 alrm as50 24kV",
    "Articlenumber": 20436143
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x630/50 AFR 24kV",
    "Articlenumber": 20436987
  },
  {
    "Description": "EXP AX-F 1x240 LT 24kV",
    "Articlenumber": 1000127431
  },
  {
    "Description": "EXP TRV-AXQJ TT 1x500+300/35 36+3,6kV",
    "Articlenumber": 20439885
  },
  {
    "Description": "EXP AXLJ-RMF 3x95/25 LT 24kV",
    "Articlenumber": 20440675
  },
  {
    "Description": "EXP AXLJ-RMFEcoCable3x95/50LTSPECRED24kV",
    "Articlenumber": 20442125
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x400/50 ALCL 24kV",
    "Articlenumber": 20442485
  },
  {
    "Description": "EXP ALLE 150 F36 RU KOMP LT",
    "Articlenumber": 1000128102
  },
  {
    "Description": "EXP ALLE 240 F37 RU KOMP LT",
    "Articlenumber": 1000128054
  },
  {
    "Description": "EXP ALLE 300 F37 RU KOMP LT",
    "Articlenumber": 1000128131
  },
  {
    "Description": "EXP ALLE 240 F37 SEKT 90",
    "Articlenumber": 1000128055
  },
  {
    "Description": "EXP CULE 240 F37 SEKT 90",
    "Articlenumber": 1000128132
  },
  {
    "Description": "EXP SE-N1XE-AS 4G95 RT",
    "Articlenumber": 20446832
  },
  {
    "Description": "EXP STLI-L 62 F7 RU OKOMP",
    "Articlenumber": 1000128575
  },
  {
    "Description": "EXP TRV-AXLJ-TT-H 3x1x95/25 24kV",
    "Articlenumber": 20449594
  },
  {
    "Description": "EXP SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20451613
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x95/25 AFR 24kV",
    "Articlenumber": 20451523
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 20451898
  },
  {
    "Description": "EXP AXLJ-TTCL HD 1x1000/95 72kV",
    "Articlenumber": 20453808
  },
  {
    "Description": "EXP AXLJ-TTCL HD 1x1000/95 72kV",
    "Articlenumber": 20453688
  },
  {
    "Description": "EXP AX-F 1x240 LT 36kV",
    "Articlenumber": 1000130254
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 1000130255
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x50/25 ALCL 12kV",
    "Articlenumber": 20458964
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x150/35 ALCL 12kV",
    "Articlenumber": 20458974
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x400/50 ALCL 12kV",
    "Articlenumber": 20458975
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x50/25 ALCL 24kV",
    "Articlenumber": 20458992
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x150/35 ALCL 24kV",
    "Articlenumber": 20459002
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 1000130620
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 1000130610
  },
  {
    "Description": "EXP AM-F 1x240 LT 12kV",
    "Articlenumber": 1000130635
  },
  {
    "Description": "EXP AM-F 1x240 LT 24kV",
    "Articlenumber": 1000130703
  },
  {
    "Description": "EXP AM-F 1x95 LT 12kV",
    "Articlenumber": 1000130597
  },
  {
    "Description": "EXP AM-F 1x95 LT 24kV",
    "Articlenumber": 1000130694
  },
  {
    "Description": "EXP AM-F 1x150 LT 12kV",
    "Articlenumber": 1000130627
  },
  {
    "Description": "EXP AM-F 1x150 LT 24kV",
    "Articlenumber": 1000130665
  },
  {
    "Description": "EXP AXLJ-RMF Eco Cable 3x95/25 LT 12kV",
    "Articlenumber": 20460702
  },
  {
    "Description": "EXP PEX-ISOL AL-R�R 1x30/18 12kV",
    "Articlenumber": 20461488
  },
  {
    "Description": "EXP MOTORKABEL 1x258 61,5kV",
    "Articlenumber": 20462244
  },
  {
    "Description": "EXP PEX-AL-CT RM 3x240+35 12kV",
    "Articlenumber": 20463490
  },
  {
    "Description": "EXP P1MeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20464589
  },
  {
    "Description": "EXP YMeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20464765
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x150/35 ALCL 36kV",
    "Articlenumber": 20474070
  },
  {
    "Description": "EXP AXAQJ-TT Pure 3x300/50 ALCL 36kV",
    "Articlenumber": 20474138
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x240/35 AFR 12kV",
    "Articlenumber": 20474148
  },
  {
    "Description": "EXP AM-F 1x240 GL 12kV",
    "Articlenumber": 1000146951
  },
  {
    "Description": "EXP AM-F 1x240 GL 24kV",
    "Articlenumber": 1000146830
  },
  {
    "Description": "EXP TXSF HD 1x240/35 AFR LT 24kV",
    "Articlenumber": 20474547
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x95/16 LT 12kV",
    "Articlenumber": 20475186
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x150/25 LT 24kV",
    "Articlenumber": 20475246
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x240/35 AFR 24kV",
    "Articlenumber": 20475245
  },
  {
    "Description": "EXP ARP1H5EX 1x185 12/20kV",
    "Articlenumber": 20475510
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x150/25 LT 12kV",
    "Articlenumber": 20476974
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 24kV",
    "Articlenumber": 20476926
  },
  {
    "Description": "EXP AXLJ-TTCL 1x1000/50 SR 52kV -",
    "Articlenumber": 20477597
  },
  {
    "Description": "EXP AM-F 1x50 LT 12kV",
    "Articlenumber": 1000175215
  },
  {
    "Description": "EXP AM-F 1x50 LT 24kV",
    "Articlenumber": 1000175253
  },
  {
    "Description": "EXP AM-F 1x630 LT 12kV",
    "Articlenumber": 1000175216
  },
  {
    "Description": "EXP AM-F 1x630 LT 24kV",
    "Articlenumber": 1000175254
  },
  {
    "Description": "EXP ALLE 240 F37 RU KOMP LT",
    "Articlenumber": 1000177414
  },
  {
    "Description": "EXP AM-F 1x240 LT 12kV",
    "Articlenumber": 1000180363
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x95/16 LT 12kV",
    "Articlenumber": 20478848
  },
  {
    "Description": "EXP AXALJ-TT 3x95/35 ALCL 36kV",
    "Articlenumber": 20479266
  },
  {
    "Description": "EXP AXLJ-TTCL TSLF 1x95/25 AFR 24kV",
    "Articlenumber": 20479449
  },
  {
    "Description": "EXP AMALJ-TT 3x240/50 ALCL 12kV",
    "Articlenumber": 20479495
  },
  {
    "Description": "EXP AMCLJ-TT 3x240/35 12kV",
    "Articlenumber": 20481001
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x240/35 AFR 24kV",
    "Articlenumber": 20481932
  },
  {
    "Description": "EXP AXQJ-TT Pure TSLI 1x50/16 AFR 24kV",
    "Articlenumber": 20481397
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x400/35 AFR 24kV",
    "Articlenumber": 20483387
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x630/50 AFR 24kV",
    "Articlenumber": 20483890
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x630/35 AFR 12kV",
    "Articlenumber": 20483808
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x50/16 LT 12kV",
    "Articlenumber": 20483961
  },
  {
    "Description": "EXP AMLJ-FCL EXSF HD 1x240/35AFR LT 24kV",
    "Articlenumber": 20486401
  },
  {
    "Description": "EXP AMLJ-FCL EXSF HD 1x400/35AFR LT 24kV",
    "Articlenumber": 20486402
  },
  {
    "Description": "EXP AMLJ-FCL EXSF HD 1x630/50AFR LT 24kV",
    "Articlenumber": 20486217
  },
  {
    "Description": "EXP ARP1H5EX 1x185 12/20kV",
    "Articlenumber": 20486732
  },
  {
    "Description": "EXP ARP1H5EX 1x240 12/20kV",
    "Articlenumber": 20487809
  },
  {
    "Description": "EXP AX-F 1x95 LT 36kV",
    "Articlenumber": 20487911
  },
  {
    "Description": "EXP ALLE 240 F37 RU KOMP LT",
    "Articlenumber": 1000251321
  },
  {
    "Description": "EXP ALLE 400 F59 RU KOMP LT",
    "Articlenumber": 1000251169
  },
  {
    "Description": "EXP ALLE 1000 F59 RU KOMP LT",
    "Articlenumber": 1000251322
  },
  {
    "Description": "EXP AHMAMK-W 3x240AL+35CU 24kV",
    "Articlenumber": 20493467
  },
  {
    "Description": "EXP AXLJ-RMF E Path 3x95/25 LT 12kV",
    "Articlenumber": 20494373
  },
  {
    "Description": "EXP Halvfabr till ALLE 1000 F59RU KOMPLT",
    "Articlenumber": 1000251961
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x240/25 LT 12kV",
    "Articlenumber": 20498111
  },
  {
    "Description": "EXP AX-F 1x95 LT LE0592 12kV",
    "Articlenumber": 20498982
  },
  {
    "Description": "EXP AXCQJ-TT Pure 3x50/16 12kV",
    "Articlenumber": 20499773
  },
  {
    "Description": "EXP AXCQJ-TT Pure 3x50/16 24kV",
    "Articlenumber": 20499670
  },
  {
    "Description": "EXP AXCQJ-TT Pure 3x400/35 12kV",
    "Articlenumber": 20499774
  },
  {
    "Description": "EXP AXCQJ-TT Pure 3x400/35 24kV",
    "Articlenumber": 20499801
  },
  {
    "Description": "EXP AX-F 1x95 LT SC-250 12kV",
    "Articlenumber": 20498936
  },
  {
    "Description": "EXP AXLJ-TT 1x240/35 36kV",
    "Articlenumber": 20499353
  },
  {
    "Description": "EXP YMeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20499237
  },
  {
    "Description": "EXP AXALJ-TT E Path 3x95/35 ALCL 36kV",
    "Articlenumber": 20499391
  },
  {
    "Description": "EXPAXLJ-TTCL TSLF PRY-ID 1x400/35AFR24kV",
    "Articlenumber": 20499967
  },
  {
    "Description": "EXP P1MeKrvaslqwd 1x240 alrm as35 24kV",
    "Articlenumber": 20500896
  },
  {
    "Description": "EXP P1MeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20502215
  },
  {
    "Description": "EXP AX-F 1x240 LT 12kV",
    "Articlenumber": 1000252840
  },
  {
    "Description": "EXP AM-F 1x150 LT 24kV",
    "Articlenumber": 1000252830
  },
  {
    "Description": "EXP AX-F 1x95 LT 12kV",
    "Articlenumber": 20504302
  },
  {
    "Description": "EXP AXLJ-TT TSLE 1x95/25 AFR 36kV",
    "Articlenumber": 20504326
  },
  {
    "Description": "EXP ALLE 1000 F59 RU KOMP LT",
    "Articlenumber": 1000252961
  },
  {
    "Description": "EXP AM-F 1x630 LT 36kV",
    "Articlenumber": 1000252971
  },
  {
    "Description": "EXP AMLJ-TTCL ESLF 1x800/50 AFR 24kV",
    "Articlenumber": 20506238
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x240/35LT 24kV lcAL",
    "Articlenumber": 20506313
  },
  {
    "Description": "EXP AMLJ-RMF E Path 3x240/35LT 24kV lcAL",
    "Articlenumber": 20506343
  },
  {
    "Description": "EXP ALLE 240 F37 RU KOMP",
    "Articlenumber": 20507909
  },
  {
    "Description": "EXP AM-F 1x240 24kV - B35",
    "Articlenumber": 20508061
  },
  {
    "Description": "EXP AM-F 1x240 24kV - R1 V6",
    "Articlenumber": 20507910
  },
  {
    "Description": "EXP YMeKrvaslqwd 3x240 Alrm as70 10kV",
    "Articlenumber": 20508740
  },
  {
    "Description": "EXP YMeKrvasdlwd 1x400 alrm as50 24kV",
    "Articlenumber": 20508624
  },
  {
    "Description": "EXP AX-F 1x95 LT 24kV",
    "Articlenumber": 1000253741
  },
  {
    "Description": "EXP PP-AL-LT 3x240+35 12kV",
    "Articlenumber": 20510514
  },
  {
    "Description": "TRV-AX-F 1x500 LT 36kV",
    "Articlenumber": 20431856
  },
  {
    "Description": "AMLJ-RMF E Path 3x50/16 LT 12kV",
    "Articlenumber": 20469535
  },
  {
    "Description": "AMLJ-RMF E Path 3x95/16 LT 12kV",
    "Articlenumber": 20469603
  },
  {
    "Description": "AMLJ-RMF E Path 3x150/25 LT 12kV",
    "Articlenumber": 20469534
  },
  {
    "Description": "AMLJ-RMF E Path 3x240/25 LT 12kV",
    "Articlenumber": 20469604
  },
  {
    "Description": "AMLJ-RMF E Path 3x240/25 LT 12kV",
    "Articlenumber": 20438883
  },
  {
    "Description": "AMLJ-RMF E Path 3x50/16 LT 24kV",
    "Articlenumber": 20469536
  },
  {
    "Description": "AMLJ-RMF E Path 3x95/16 LT 24kV",
    "Articlenumber": 20469605
  },
  {
    "Description": "AMLJ-RMF E Path 3x150/25 LT 24kV",
    "Articlenumber": 20469537
  },
  {
    "Description": "AMLJ-RMF E Path 3x240/25 LT 24kV",
    "Articlenumber": 20469606
  },
  {
    "Description": "U-AXLJ 1x50/16 LT 12kV",
    "Articlenumber": 20173241
  },
  {
    "Description": "U-AXLJ 1x50/16 LT 24kV",
    "Articlenumber": 20197111
  },
  {
    "Description": "AXLJ-F 1x50/16 LT 12kV",
    "Articlenumber": 20261378
  },
  {
    "Description": "AMLJ-TTCL 1x240/25 12kV lcAL",
    "Articlenumber": 20478267
  },
  {
    "Description": "AMLJ-TTCL 1x630/35 12kV lcAL",
    "Articlenumber": 20478352
  },
  {
    "Description": "AMLJ-TTCL 1x240/25 24kV lcAL",
    "Articlenumber": 20478353
  },
  {
    "Description": "AMLJ-TTCL 1x630/35 24kV lcAL",
    "Articlenumber": 20478268
  },
  {
    "Description": "AMLJ-TT E Path 1x630/35 12kV lcAL",
    "Articlenumber": 20488362
  },
  {
    "Description": "AMLJ-TT E Path 1x500/35 24kV lcAL",
    "Articlenumber": 20498889
  },
  {
    "Description": "AMLJ-TT E Path 1x630/35 24kV lcAL",
    "Articlenumber": 20488393
  },
  {
    "Description": "AXLJ-F 1x50/16 LT 24kV",
    "Articlenumber": 20261379
  },
  {
    "Description": "U-AXLJ-RMF 3x50/16 LT 12kV",
    "Articlenumber": 20078179
  },
  {
    "Description": "AXLJ-RMF E Path 3x50/16 LT 12kV",
    "Articlenumber": 20414064
  },
  {
    "Description": "U-AXLJ-RMF 3x70/16 LT 12kV",
    "Articlenumber": 20117752
  },
  {
    "Description": "U-AXLJ-RMF 3x95/25 LT 12kV",
    "Articlenumber": 20095493
  },
  {
    "Description": "U-AXLJ-RMF 3x95/16 LT 12kV",
    "Articlenumber": 20078180
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/16 LT 12kV",
    "Articlenumber": 20376553
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/25 LT 12kV",
    "Articlenumber": 20415445
  },
  {
    "Description": "U-AXLJ-RMF 3x120/25 LT 12kV",
    "Articlenumber": 20117753
  },
  {
    "Description": "AXLJ-RMF 3x150/25 LT 12kV",
    "Articlenumber": 20078182
  },
  {
    "Description": "AXLJ-RMF E Path 3x150/25 LT 12kV",
    "Articlenumber": 20380516
  },
  {
    "Description": "U-AXLJ-RMF 3x185/35 LT 12kV",
    "Articlenumber": 20117754
  },
  {
    "Description": "U-AXLJ-RMF 3x240/35 LT 12kV",
    "Articlenumber": 20087130
  },
  {
    "Description": "AXLJ-RMF 3x240/25 LT 12kV",
    "Articlenumber": 20078184
  },
  {
    "Description": "U-AXLJ-RMF 3x240/50 LT 12kV",
    "Articlenumber": 20349988
  },
  {
    "Description": "U-AXLJ-RMF E Path 3x240/25 LT 12kV",
    "Articlenumber": 20376501
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/35 LT 12kV",
    "Articlenumber": 20415444
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/50 LT SPEC 12kV",
    "Articlenumber": 20427768
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/25 LT 12kV lcAL",
    "Articlenumber": 20478295
  },
  {
    "Description": "U-AXLJ-RMF 3x300/35 LT 12kV",
    "Articlenumber": 20118045
  },
  {
    "Description": "U-AXLJ-RMF 3x50/16 LT 24kV",
    "Articlenumber": 20078233
  },
  {
    "Description": "AXLJ-RMF E Path 3x50/16 LT 24kV",
    "Articlenumber": 20413969
  },
  {
    "Description": "U-AXLJ-RMF 3x70/16 LT 24kV",
    "Articlenumber": 20117881
  },
  {
    "Description": "U-AXLJ-RMF 3x95/25 LT 24kV",
    "Articlenumber": 20102136
  },
  {
    "Description": "U-AXLJ-RMF 3x95/50 LT 24kV",
    "Articlenumber": 20382804
  },
  {
    "Description": "U-AXLJ-RMF 3x95/25 LT SPEC 24kV",
    "Articlenumber": 20383927
  },
  {
    "Description": "U-AXLJ-RMF 3x95/16 LT 24kV",
    "Articlenumber": 20078181
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/16 LT 24kV",
    "Articlenumber": 20376379
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/25 LT 24kV",
    "Articlenumber": 20415428
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/50 LT SPEC 24kV",
    "Articlenumber": 20427496
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/25 LT SPEC 24kV",
    "Articlenumber": 20427498
  },
  {
    "Description": "U-AXLJ-RMF 3x120/25 LT 24kV",
    "Articlenumber": 20117882
  },
  {
    "Description": "U-AXLJ-RMF 3x150/25 LT 24kV",
    "Articlenumber": 20078234
  },
  {
    "Description": "U-AXLJ-RMF 3x150/35 LT 24kV",
    "Articlenumber": 20293184
  },
  {
    "Description": "AXLJ-RMF E Path 3x150/25 LT 24kV",
    "Articlenumber": 20414072
  },
  {
    "Description": "AXLJ-RMF E Path 3x150/35 LT SPEC 24kV",
    "Articlenumber": 20427499
  },
  {
    "Description": "U-AXLJ-RMF 3x185/35 LT 24kV",
    "Articlenumber": 20117883
  },
  {
    "Description": "U-AXLJ-RMF 3x240/35 LT 24kV",
    "Articlenumber": 20091033
  },
  {
    "Description": "U-AXLJ-RMF 3x240/50 LT 24kV",
    "Articlenumber": 20382767
  },
  {
    "Description": "U-AXLJ-RMF 3x240/35 LT SPEC 24kV",
    "Articlenumber": 20383869
  },
  {
    "Description": "AXLJ-RMF 3x240/25 LT 24kV",
    "Articlenumber": 20102137
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/25 LT 24kV",
    "Articlenumber": 20376494
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/35 LT 24kV",
    "Articlenumber": 20415446
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/50 LT SPEC 24kV",
    "Articlenumber": 20427769
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/35 LT SPEC 24kV",
    "Articlenumber": 20427497
  },
  {
    "Description": "AXLJ-RMF E Path 3x240/25 LT 24kV lcAL",
    "Articlenumber": 20478294
  },
  {
    "Description": "U-AXLJ-RMF 3x300/35 LT 24kV",
    "Articlenumber": 20118046
  },
  {
    "Description": "U-AXLJ-RMF 3x50/16 LT 36kV",
    "Articlenumber": 20102138
  },
  {
    "Description": "AXLJ-RMF E Path 3x50/16 LT 36kV",
    "Articlenumber": 20460486
  },
  {
    "Description": "U-AXLJ-RMF 3x70/16 LT 36kV",
    "Articlenumber": 20117978
  },
  {
    "Description": "U-AXLJ-RMF 3x95/25 LT 36kV",
    "Articlenumber": 20102140
  },
  {
    "Description": "U-AXLJ-RMF 3x95/16 LT 36kV",
    "Articlenumber": 20102141
  },
  {
    "Description": "AXLJ-RMF E Path 3x95/25 LT SPEC 36kV",
    "Articlenumber": 20453641
  },
  {
    "Description": "U-AXLJ-RMF 3x120/25 LT 36kV",
    "Articlenumber": 20117996
  },
  {
    "Description": "U-AXLJ-RMF 3x150/25 LT 36kV",
    "Articlenumber": 20102142
  },
  {
    "Description": "U-AXLJ-RMF 3x150/25 LT SPEC 36kV",
    "Articlenumber": 20414537
  },
  {
    "Description": "AXLJ-RMF E Path 3x150/25 LT SPEC 36kV",
    "Articlenumber": 20427770
  },
  {
    "Description": "AXLJ-RMF E Path 3x150/35 LT SPEC 36kV",
    "Articlenumber": 20505888
  },
  {
    "Description": "U-AXLJ-RMF 3x185/35 LT 36kV",
    "Articlenumber": 20117997
  },
  {
    "Description": "U-AXLJ-RMF 3x240/35 LT 36kV",
    "Articlenumber": 20102143
  },
  {
    "Description": "U-AXLJ-RMF 3x240/25 LT 36kV",
    "Articlenumber": 20102144
  },
  {
    "Description": "U-AXLJ-RMF 3x300/35 LT 36kV",
    "Articlenumber": 20114869
  },
  {
    "Description": "AXLJ-RMF E Path 3x300/35 LT 36kV",
    "Articlenumber": 20509818
  },
  {
    "Description": "AXLJ-RMFCL 3x95/25 LT 36kV",
    "Articlenumber": 20102145
  },
  {
    "Description": "AXLJ-RMFCL 3x240/35 LT 36kV",
    "Articlenumber": 20102146
  },
  {
    "Description": "AXLJ-RMF-KOMBI 3x25/16 LT 12kV",
    "Articlenumber": 20102147
  },
  {
    "Description": "AXLJ-RMF-KOMBI 3x50/16 LT 12kV",
    "Articlenumber": 20102148
  },
  {
    "Description": "AXLJ-RMF-KOMBI 3x25/16 LT 24kV",
    "Articlenumber": 20102149
  },
  {
    "Description": "AXLJ-RMF-KOMBI 3x50/16 LT 24kV",
    "Articlenumber": 20102150
  },
  {
    "Description": "FXLJ-RMF-KOMBI 3x10/10 LT 12kV",
    "Articlenumber": 20102151
  },
  {
    "Description": "FXLJ-RMF-KOMBI 3x10/10 LT 24kV",
    "Articlenumber": 20102152
  },
  {
    "Description": "U-FXKJ-F 3x95/16 F4 12kV",
    "Articlenumber": 20112257
  },
  {
    "Description": "U-FXKJ-F 3x150/25 F4 12kV",
    "Articlenumber": 20112258
  },
  {
    "Description": "U-FXKJ-F 3x185/25 F4 12kV",
    "Articlenumber": 20112259
  },
  {
    "Description": "FXLJ-RMF 3x240/35 LT 12kV",
    "Articlenumber": 20165786
  },
  {
    "Description": "FXLJ-F 1x50/16 LT 12kV",
    "Articlenumber": 20352340
  },
  {
    "Description": "FXLJ-FCL 1x240/240 LT 24kV",
    "Articlenumber": 20128486
  },
  {
    "Description": "U-AXQJ-F 1x50/16 LT F4 12kV",
    "Articlenumber": 20143333
  },
  {
    "Description": "U-AXQJ-F 1x400/35 LT F4 12kV",
    "Articlenumber": 20143572
  },
  {
    "Description": "U-AXQJ-F 1x630/35 LT F4 12kV",
    "Articlenumber": 20102577
  },
  {
    "Description": "U-AXQJ-F 1x630/35 LT F4 R�D 12kV",
    "Articlenumber": 20167445
  },
  {
    "Description": "AXAQJ-TT Pure 3x95/35 ALCL 24kV",
    "Articlenumber": 20440157
  },
  {
    "Description": "AXAQJ-TT Pure 3x150/35 ALCL 24kV",
    "Articlenumber": 20458903
  },
  {
    "Description": "AXAQJ-TT Pure 3x300/50 ALCL 24kV",
    "Articlenumber": 20458925
  },
  {
    "Description": "U-AXQJ-F 1x150/25 LT F4 24kV",
    "Articlenumber": 20142561
  },
  {
    "Description": "U-AXQJ-F 1x240/35 LT F4 36kV",
    "Articlenumber": 20136214
  },
  {
    "Description": "U-AXQJ-RMF 3x50/16 LT F4 12kV",
    "Articlenumber": 20102153
  },
  {
    "Description": "AXQJ-RMF Pure 3x50/16 LT 12kV",
    "Articlenumber": 20203881
  },
  {
    "Description": "U-AXQJ-RMF 3x70/16 LT F4 12kV",
    "Articlenumber": 20118052
  },
  {
    "Description": "AXQJ-RMF Pure 3x70/16 LT 12kV",
    "Articlenumber": 20203882
  },
  {
    "Description": "U-AXQJ-RMF 3x95/25 LT F4 12kV",
    "Articlenumber": 20102154
  },
  {
    "Description": "AXQJ-RMF Pure 3x95/25 LT 12kV",
    "Articlenumber": 20203883
  },
  {
    "Description": "AXQJ-RMF Pure 3x95/25 LT R�D 12kV",
    "Articlenumber": 20266971
  },
  {
    "Description": "U-AXQJ-RMF 3x120/25 LT F4 12kV",
    "Articlenumber": 20118053
  },
  {
    "Description": "AXQJ-RMF Pure 3x120/25 LT 12kV",
    "Articlenumber": 20203884
  },
  {
    "Description": "U-AXQJ-RMF 3x150/25 LT F4 12kV",
    "Articlenumber": 20078174
  },
  {
    "Description": "AXQJ-RMF Pure 3x150/25 LT 12kV",
    "Articlenumber": 20203885
  },
  {
    "Description": "U-AXQJ-RMF 3x150/25 LT F4 R�D 12kV",
    "Articlenumber": 20113762
  },
  {
    "Description": "AXQJ-RMF Pure 3x150/25 LT R�D 12kV",
    "Articlenumber": 20203897
  },
  {
    "Description": "U-AXQJ-RMF 3x185/35 LT F4 12kV",
    "Articlenumber": 20118054
  },
  {
    "Description": "AXQJ-RMF Pure 3x185/35 LT 12kV",
    "Articlenumber": 20203886
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 12kV",
    "Articlenumber": 20102155
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT 12kV",
    "Articlenumber": 20203887
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 R�D 12kV",
    "Articlenumber": 20126693
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT R�D 12kV",
    "Articlenumber": 20203898
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 GUL 12kV",
    "Articlenumber": 20159480
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT GUL 12kV",
    "Articlenumber": 20203899
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT 12kV -",
    "Articlenumber": 20344397
  },
  {
    "Description": "U-AXQJ-RMF 3x300/35 LT F4 12kV",
    "Articlenumber": 20118055
  },
  {
    "Description": "AXQJ-RMF Pure 3x300/35 LT 12kV",
    "Articlenumber": 20203888
  },
  {
    "Description": "AXQJ-RMF Pure 3x300/35 LT 12kV -",
    "Articlenumber": 20344398
  },
  {
    "Description": "AXQJ-RMF Pure 3x400/35 LT 12kV",
    "Articlenumber": 20267396
  },
  {
    "Description": "U-AXQJ-RMF 3x400/120 LT F4 12kV",
    "Articlenumber": 20149355
  },
  {
    "Description": "AXQJ-RMF Pure 3x400/120 LT 12kV",
    "Articlenumber": 20203900
  },
  {
    "Description": "U-AXQJ-RMF 3x50/16 LT F4 24kV",
    "Articlenumber": 20102156
  },
  {
    "Description": "AXQJ-RMF Pure 3x50/16 LT 24kV",
    "Articlenumber": 20203889
  },
  {
    "Description": "U-AXQJ-RMF 3x70/16 LT F4 24kV",
    "Articlenumber": 20118107
  },
  {
    "Description": "AXQJ-RMF Pure 3x70/16 LT 24kV",
    "Articlenumber": 20203890
  },
  {
    "Description": "U-AXQJ-RMF 3x95/25 LT F4 24kV",
    "Articlenumber": 20102157
  },
  {
    "Description": "AXQJ-RMF Pure 3x95/25 LT 24kV",
    "Articlenumber": 20203891
  },
  {
    "Description": "AXQJ-RMF Pure 3x95/25 LT GR�N 24kV",
    "Articlenumber": 20420267
  },
  {
    "Description": "U-AXQJ-RMF 3x120/25 LT F4 24kV",
    "Articlenumber": 20118108
  },
  {
    "Description": "AXQJ-RMF Pure 3x120/25 LT 24kV",
    "Articlenumber": 20203892
  },
  {
    "Description": "U-AXQJ-RMF 3x150/25 LT F4 24kV",
    "Articlenumber": 20102158
  },
  {
    "Description": "AXQJ-RMF Pure 3x150/25 LT 24kV",
    "Articlenumber": 20203893
  },
  {
    "Description": "U-AXQJ-RMF 3x185/35 LT F4 24kV",
    "Articlenumber": 20118109
  },
  {
    "Description": "AXQJ-RMF Pure 3x185/35 LT 24kV",
    "Articlenumber": 20203894
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 24kV",
    "Articlenumber": 20102159
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT 24kV",
    "Articlenumber": 20203895
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 GR�N 24kV",
    "Articlenumber": 20126694
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT GR�N 24kV",
    "Articlenumber": 20203901
  },
  {
    "Description": "U-AXQJ-RMF 3x240/35 LT F4 GUL 24kV",
    "Articlenumber": 20204956
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT 24kV -",
    "Articlenumber": 20344399
  },
  {
    "Description": "U-AXQJ-RMF 3x300/35 LT F4 24kV",
    "Articlenumber": 20118110
  },
  {
    "Description": "AXQJ-RMF Pure 3x300/35 LT 24kV",
    "Articlenumber": 20203896
  },
  {
    "Description": "AXQJ-RMF Pure 3x300/35 LT 24kV -",
    "Articlenumber": 20344400
  },
  {
    "Description": "AXQJ-RMF Pure 3x50/16 LT 36kV",
    "Articlenumber": 20321173
  },
  {
    "Description": "AXQJ-RMF Pure 3x120/35 LT 36kV",
    "Articlenumber": 20333044
  },
  {
    "Description": "AXQJ-RMF Pure 3x150/25 LT 36kV",
    "Articlenumber": 20397013
  },
  {
    "Description": "AXQJ-RMF Pure 3x185/35 LT 36kV",
    "Articlenumber": 20316332
  },
  {
    "Description": "AXQJ-RMF Pure 3x240/35 LT 36kV",
    "Articlenumber": 20314502
  },
  {
    "Description": "AXQJ-RMF Pure 3x300/35 LT 36kV",
    "Articlenumber": 20321246
  },
  {
    "Description": "AXAQJ-TT Pure 3x95/35 ALCL 12kV",
    "Articlenumber": 20449402
  },
  {
    "Description": "AXAQJ-TT Pure 3x150/35 ALCL 12kV",
    "Articlenumber": 20488632
  },
  {
    "Description": "AXAQJ-TT Pure 3x240/50 ALCL R�D 12kV",
    "Articlenumber": 20501015
  },
  {
    "Description": "U-FXQJ-F 1x630/35 F4 GUL 12kV",
    "Articlenumber": 20116152
  },
  {
    "Description": "FXQJ-RMF Pure 3x240/35 LT 12kV",
    "Articlenumber": 20223184
  },
  {
    "Description": "U-FXQJ-RMF 3x70/16 LT F4 24kV",
    "Articlenumber": 20112702
  },
  {
    "Description": "U-FXQJ-RMF 3x185/35 LT F4 24kV",
    "Articlenumber": 20112703
  },
  {
    "Description": "FXQJ-RMF Pure 3x185/35 LT 24kV",
    "Articlenumber": 20237378
  },
  {
    "Description": "TRV-AXQJ TT Pure 1x240/80 36kV",
    "Articlenumber": 20431232
  },
  {
    "Description": "TRV-AXQJ TT Pure 1x500/80 36kV",
    "Articlenumber": 20419750
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x50/16 AFR F4 12kV",
    "Articlenumber": 20110432
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x50/16 AFR 12kV",
    "Articlenumber": 20218299
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x70/16 AFR F4 12kV",
    "Articlenumber": 20110433
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x70/16 AFR 12kV",
    "Articlenumber": 20218300
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x95/25 AFR F4 12kV",
    "Articlenumber": 20110434
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x95/25 AFR 12kV",
    "Articlenumber": 20218371
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x120/25 AFR F4 12kV",
    "Articlenumber": 20110435
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x120/25 AFR 12kV",
    "Articlenumber": 20218372
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x150/25 AFR F4 12kV",
    "Articlenumber": 20110436
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x150/25 AFR 12kV",
    "Articlenumber": 20218373
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x185/35 AFR F4 12kV",
    "Articlenumber": 20110437
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x185/35 AFR 12kV",
    "Articlenumber": 20218374
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x240/35 AFR F4 12kV",
    "Articlenumber": 20110438
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x240/35 AFR 12kV",
    "Articlenumber": 20218375
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x240/25 AFR 12kV",
    "Articlenumber": 20267465
  },
  {
    "Description": "U-AXQJ-TT Pure TSLI 1x240/35 AFR 12kV -",
    "Articlenumber": 20344401
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x300/35 AFR F4 12kV",
    "Articlenumber": 20110439
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR 12kV",
    "Articlenumber": 20218376
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR 12kV -",
    "Articlenumber": 20344402
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x400/35 AFR F4 12kV",
    "Articlenumber": 20102160
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x400/35 AFR 12kV",
    "Articlenumber": 20218377
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x500/35 AFR F4 12kV",
    "Articlenumber": 20110440
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x500/35 AFR 12kV",
    "Articlenumber": 20218378
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x630/35 AFR F4 12kV",
    "Articlenumber": 20100493
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR 12kV",
    "Articlenumber": 20218379
  },
  {
    "Description": "AXQJ-TT B2ca Pure TSLI 1x630/35 AFR 12kV",
    "Articlenumber": 20481306
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR SPEC 12kV",
    "Articlenumber": 20278359
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR R�D 12kV",
    "Articlenumber": 20235237
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR GUL 12kV",
    "Articlenumber": 20224957
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR 12kV -",
    "Articlenumber": 20344403
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x800/50 AFR F4 12kV",
    "Articlenumber": 20110441
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x800/50 AFR 12kV",
    "Articlenumber": 20218380
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x800/35 AFR SPEC 12kV",
    "Articlenumber": 20284505
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x1000/50 AFR F4 12kV",
    "Articlenumber": 20203454
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x1000/50 AFR 12kV",
    "Articlenumber": 20496331
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x1000/50 AFR F4B 12kV",
    "Articlenumber": 20148171
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x1000/50 AFR GUL 12kV",
    "Articlenumber": 20487764
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x50/16 AFR F4 12kV",
    "Articlenumber": 20131360
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x50/16 AFR 12kV",
    "Articlenumber": 20218381
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x70/16 AFR F4 12kV",
    "Articlenumber": 20131361
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x70/16 AFR 12kV",
    "Articlenumber": 20218382
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x95/25 AFR F4 12kV",
    "Articlenumber": 20131362
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x95/25 AFR 12kV",
    "Articlenumber": 20218383
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x120/25 AFR F4 12kV",
    "Articlenumber": 20131363
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x120/25 AFR 12kV",
    "Articlenumber": 20218384
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x150/25 AFR F4 12kV",
    "Articlenumber": 20131364
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x150/25 AFR 12kV",
    "Articlenumber": 20218385
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x185/35 AFR F4 12kV",
    "Articlenumber": 20131365
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x185/35 AFR 12kV",
    "Articlenumber": 20218386
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x240/35 AFR F4 12kV",
    "Articlenumber": 20131366
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x240/35 AFR 12kV",
    "Articlenumber": 20218387
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x300/35 AFR F4 12kV",
    "Articlenumber": 20131367
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x300/35 AFR 12kV",
    "Articlenumber": 20218388
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x400/35 AFR F4 12kV",
    "Articlenumber": 20131368
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x400/35 AFR 12kV",
    "Articlenumber": 20218389
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x500/35 AFR F4 12kV",
    "Articlenumber": 20131369
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x500/35 AFR 12kV",
    "Articlenumber": 20218390
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x50/16 AFR F4 24kV",
    "Articlenumber": 20102161
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x50/16 AFR 24kV",
    "Articlenumber": 20217589
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x70/16 AFR F4 24kV",
    "Articlenumber": 20110442
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x70/16 AFR 24kV",
    "Articlenumber": 20217590
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x95/25 AFR F4 24kV",
    "Articlenumber": 20102162
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x95/25 AFR 24kV",
    "Articlenumber": 20217591
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x120/25 AFR F4 24kV",
    "Articlenumber": 20110443
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x120/25 AFR 24kV",
    "Articlenumber": 20217592
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x150/25 AFR F4 24kV",
    "Articlenumber": 20102163
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x150/25 AFR 24kV",
    "Articlenumber": 20217593
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x185/35 AFR F4 24kV",
    "Articlenumber": 20110444
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x185/35 AFR 24kV",
    "Articlenumber": 20217594
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x240/35 AFR F4 24kV",
    "Articlenumber": 20098206
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x240/35 AFR 24kV",
    "Articlenumber": 20217595
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x240/35 AFR 24kV -",
    "Articlenumber": 20344404
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x300/35 AFR F4 24kV",
    "Articlenumber": 20111475
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR 24kV",
    "Articlenumber": 20217596
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR 24kV -",
    "Articlenumber": 20344405
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x400/35 AFR F4 24kV",
    "Articlenumber": 20102164
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x400/35 AFR 24kV",
    "Articlenumber": 20217597
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x500/35 AFR F4 24kV",
    "Articlenumber": 20102165
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x500/35 AFR 24kV",
    "Articlenumber": 20217598
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x630/50 AFR F4 24kV",
    "Articlenumber": 20102166
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/50 AFR 24kV",
    "Articlenumber": 20217599
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/50 AFR GR�N 24kV",
    "Articlenumber": 20336699
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/50 AFR 24kV -",
    "Articlenumber": 20344406
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x800/50 AFR F4 24kV",
    "Articlenumber": 20110445
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x800/50 AFR 24kV",
    "Articlenumber": 20217600
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x1000/50 AFR F4B 24kV",
    "Articlenumber": 20148172
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x50/16 AFR F4 24kV",
    "Articlenumber": 20131458
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x50/16 AFR 24kV",
    "Articlenumber": 20217601
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x70/16 AFR F4 24kV",
    "Articlenumber": 20131459
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x70/16 AFR 24kV",
    "Articlenumber": 20217602
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x95/25 AFR F4 24kV",
    "Articlenumber": 20131460
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x95/25 AFR 24kV",
    "Articlenumber": 20217603
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x120/25 AFR F4 24kV",
    "Articlenumber": 20131461
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x120/25 AFR 24kV",
    "Articlenumber": 20217604
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x150/25 AFR F4 24kV",
    "Articlenumber": 20131462
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x150/25 AFR 24kV",
    "Articlenumber": 20217605
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x185/35 AFR F4 24kV",
    "Articlenumber": 20131463
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x185/35 AFR 24kV",
    "Articlenumber": 20217606
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x240/35 AFR F4 24kV",
    "Articlenumber": 20131441
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x240/35 AFR 24kV",
    "Articlenumber": 20217607
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x300/35 AFR F4 24kV",
    "Articlenumber": 20131464
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x300/35 AFR 24kV",
    "Articlenumber": 20217608
  },
  {
    "Description": "U-AXQJ-TT TSLI 3x1x400/35 AFR F4 24kV",
    "Articlenumber": 20131465
  },
  {
    "Description": "AXQJ-TT Pure TSLI 3x1x400/35 AFR 24kV",
    "Articlenumber": 20217609
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x50/25 AFR F4 36kV",
    "Articlenumber": 20113907
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x70/25 AFR F4 36kV",
    "Articlenumber": 20113908
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x95/25 AFR F4 36kV",
    "Articlenumber": 20102167
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x95/25 AFR 36kV",
    "Articlenumber": 20327647
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x120/35 AFR F4 36kV",
    "Articlenumber": 20113909
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x150/35 AFR F4 36kV",
    "Articlenumber": 20113910
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x150/35 AFR 36kV",
    "Articlenumber": 20488584
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x185/35 AFR F4 36kV",
    "Articlenumber": 20113911
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x185/35 AFR 36kV",
    "Articlenumber": 20356044
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x240/35 AFR F4 36kV",
    "Articlenumber": 20102168
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x240/35 AFR 36kV",
    "Articlenumber": 20314873
  },
  {
    "Description": "AXQJ-TT B2ca Pure TSLI 1x240/35 AFR 36kV",
    "Articlenumber": 20494889
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x300/35 AFR F4 36kV",
    "Articlenumber": 20113912
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR 36kV",
    "Articlenumber": 20408504
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x300/35 AFR SPEC 36kV",
    "Articlenumber": 20219149
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x400/35 AFR F4 36kV",
    "Articlenumber": 20102169
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x400/35 AFR 36kV",
    "Articlenumber": 20317013
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x500/35 AFR F4 36kV",
    "Articlenumber": 20113913
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x500/35 AFR 36kV",
    "Articlenumber": 20263153
  },
  {
    "Description": "AXQJ-TT B2ca Pure TSLI 1x500/35 AFR 36kV",
    "Articlenumber": 20453913
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x500/35 AFR F4 SPEC 36kV",
    "Articlenumber": 20181606
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x500/35 AFR SPEC 36kV",
    "Articlenumber": 20219150
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x630/50 AFR F4 36kV",
    "Articlenumber": 20102170
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/50 AFR 36kV",
    "Articlenumber": 20262406
  },
  {
    "Description": "AXQJ-TT B2ca Pure TSLI 1x630/50 AFR 36kV",
    "Articlenumber": 20501460
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x630/35 AFR F4 SPEC 36kV",
    "Articlenumber": 20204950
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/35 AFR SPEC 36kV",
    "Articlenumber": 20219151
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x630/50 AFR SPEC 36kV",
    "Articlenumber": 20296046
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x800/50 AFR F4 36kV",
    "Articlenumber": 20113914
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x800/50 AFR 36kV",
    "Articlenumber": 20409778
  },
  {
    "Description": "AXQJ-TT B2ca Pure 1x630/35 SR 36kV -",
    "Articlenumber": 20397668
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x400/50 AFR 52kV",
    "Articlenumber": 20504894
  },
  {
    "Description": "AXLJ-TT E Path 1x50/16 12kV",
    "Articlenumber": 20491629
  },
  {
    "Description": "AXLJ-TT E Path 1x95/25 12kV",
    "Articlenumber": 20491668
  },
  {
    "Description": "AXLJ-TT E Path 1x150/25 12kV",
    "Articlenumber": 20491827
  },
  {
    "Description": "AXLJ-TT 1x240/25 12kV",
    "Articlenumber": 20461843
  },
  {
    "Description": "AXLJ-TT E Path 1x240/35 12kV",
    "Articlenumber": 20479680
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/25 AFR 12kV",
    "Articlenumber": 20388507
  },
  {
    "Description": "AXLJ-TT TSLE 1x300/35 AFR 12kV",
    "Articlenumber": 20362808
  },
  {
    "Description": "AXLJ-TT 1x300/25 12kV",
    "Articlenumber": 20461861
  },
  {
    "Description": "AXLJ-TT E Path 1x300/35 12kV",
    "Articlenumber": 20480463
  },
  {
    "Description": "AXLJ-TT 1x400/35 12kV",
    "Articlenumber": 20461727
  },
  {
    "Description": "AXLJ-TT E Path 1x400/35 12kV",
    "Articlenumber": 20492221
  },
  {
    "Description": "AXLJ-TT TSLE 1x500/35 AFR 12kV",
    "Articlenumber": 20147568
  },
  {
    "Description": "AXLJ-TT 1x500/35 12kV",
    "Articlenumber": 20461714
  },
  {
    "Description": "AXLJ-TT E Path 1x500/35 12kV",
    "Articlenumber": 20492381
  },
  {
    "Description": "AXLJ-TT E Path 1x630/35 12kV",
    "Articlenumber": 20480137
  },
  {
    "Description": "AXLJ-TT TSLE 3x1x240/35 AFR 12kV",
    "Articlenumber": 20110446
  },
  {
    "Description": "AXLJ-TT TSLE 3x1x240/25 AFR SPEC 12kV",
    "Articlenumber": 20356880
  },
  {
    "Description": "U-AXLJ-TT 3x25/16 12kV",
    "Articlenumber": 20102171
  },
  {
    "Description": "U-AXLJ-TT 3x35/16 12kV",
    "Articlenumber": 20117447
  },
  {
    "Description": "U-AXLJ-TT 3x50/16 12kV",
    "Articlenumber": 20078230
  },
  {
    "Description": "U-AXLJ-TT 3x70/16 12kV",
    "Articlenumber": 20117448
  },
  {
    "Description": "U-AXLJ-TT 3x95/25 12kV",
    "Articlenumber": 20085005
  },
  {
    "Description": "U-AXLJ-TT 3x120/25 12kV",
    "Articlenumber": 20111380
  },
  {
    "Description": "U-AXLJ-TT 3x120/16 12kV",
    "Articlenumber": 20111193
  },
  {
    "Description": "U-AXLJ-TT 3x150/25 12kV",
    "Articlenumber": 20092242
  },
  {
    "Description": "U-AXLJ-TT 3x185/35 12kV",
    "Articlenumber": 20117449
  },
  {
    "Description": "U-AXLJ-TT 3x240/35 12kV",
    "Articlenumber": 20078429
  },
  {
    "Description": "U-AXLJ-TT 3x240/25 12kV",
    "Articlenumber": 20204058
  },
  {
    "Description": "U-AXLJ-TTCL 3x95/25 24kV",
    "Articlenumber": 20121649
  },
  {
    "Description": "U-AXLJ-TTCL 3x240/35 24kV",
    "Articlenumber": 20121759
  },
  {
    "Description": "AXLJ-TT E Path 1x50/16 24kV",
    "Articlenumber": 20491651
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x95/25 AFR SPEC 24kV",
    "Articlenumber": 20389003
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x95/25 AFR SPEC 24kV",
    "Articlenumber": 20423916
  },
  {
    "Description": "AXLJ-TT E Path 1x95/25 24kV",
    "Articlenumber": 20491811
  },
  {
    "Description": "TRV-AXLJ-TT-H 1x95/25 24kV",
    "Articlenumber": 20454847
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/25 AFR 24kV",
    "Articlenumber": 20365103
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x150/25 AFR SPEC 24kV",
    "Articlenumber": 20389005
  },
  {
    "Description": "AXLJ-TT E Path 1x150/25 24kV",
    "Articlenumber": 20491946
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x185/25 AFR SPEC 24kV",
    "Articlenumber": 20423953
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x240/25 AFR SPEC 24kV",
    "Articlenumber": 20389004
  },
  {
    "Description": "AXLJ-TT E Path 1x240/35 24kV",
    "Articlenumber": 20479703
  },
  {
    "Description": "AXLJ-TT TSLE 1x300/35 AFR 24kV",
    "Articlenumber": 20170703
  },
  {
    "Description": "AXLJ-TT E Path 1x300/35 24kV",
    "Articlenumber": 20480140
  },
  {
    "Description": "AXLJ-TT TSLE 1x400/35 AFR 24kV",
    "Articlenumber": 20365145
  },
  {
    "Description": "AXLJ-TT E Path 1x400/35 24kV",
    "Articlenumber": 20491977
  },
  {
    "Description": "AXLJ-TT TSLE 1x500/35 AFR 24kV",
    "Articlenumber": 20487133
  },
  {
    "Description": "AXLJ-TT E Path 1x500/35 24kV",
    "Articlenumber": 20492309
  },
  {
    "Description": "AXLJ-TT TSLE HD 1x500/35 AFR 24kV",
    "Articlenumber": 20180236
  },
  {
    "Description": "AXLJ-TT TSLE 1x500/35 AFR RED 24kV",
    "Articlenumber": 20163421
  },
  {
    "Description": "AXLJ-TT TSLE 1x630/50 AFR 24kV",
    "Articlenumber": 20365170
  },
  {
    "Description": "AXLJ-TT E Path 1x630/35 24kV",
    "Articlenumber": 20480338
  },
  {
    "Description": "AXLJ-TT TSLE 1x800/50 AFR 24kV",
    "Articlenumber": 20336327
  },
  {
    "Description": "U-AXLJ-TT 3x25/16 24kV",
    "Articlenumber": 20078228
  },
  {
    "Description": "U-AXLJ-TT 3x35/16 24kV",
    "Articlenumber": 20117458
  },
  {
    "Description": "U-AXLJ-TT 3x50/16 24kV",
    "Articlenumber": 20078229
  },
  {
    "Description": "U-AXLJ-TT 3x70/16 24kV",
    "Articlenumber": 20117459
  },
  {
    "Description": "U-AXLJ-TT 3x95/25 24kV",
    "Articlenumber": 20091664
  },
  {
    "Description": "U-AXLJ-TT 3x120/25 24kV",
    "Articlenumber": 20117460
  },
  {
    "Description": "U-AXLJ-TT 3x150/25 24kV",
    "Articlenumber": 20078231
  },
  {
    "Description": "U-AXLJ-TT 3x185/35 24kV",
    "Articlenumber": 20117461
  },
  {
    "Description": "U-AXLJ-TT 3x240/35 24kV",
    "Articlenumber": 20102172
  },
  {
    "Description": "AXLJ-TT TSLE 1x95/25 AFR 36kV",
    "Articlenumber": 20168163
  },
  {
    "Description": "AXLJ-TT TSLE RR 1x95/25 AFR SPEC 36kV",
    "Articlenumber": 20388830
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/35 AFR 36kV",
    "Articlenumber": 20389541
  },
  {
    "Description": "AXLJ-TT 1x150/35 SPEC 36kV",
    "Articlenumber": 20454860
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/35 AFR 36kV",
    "Articlenumber": 20509348
  },
  {
    "Description": "AXLJ-TT TSLE HD 1x150/35 AFR 36kV",
    "Articlenumber": 20131546
  },
  {
    "Description": "AXLJ-TT TSLE HD 1x150/35 AFR 36kV",
    "Articlenumber": 20168162
  },
  {
    "Description": "AXLJ-TT 1x150/25 36kV",
    "Articlenumber": 20359016
  },
  {
    "Description": "AXLJ-TT TSLE 1x185/35 AFR 36kV",
    "Articlenumber": 20477969
  },
  {
    "Description": "AXLJ-TT 1x185/35 36kV",
    "Articlenumber": 20361107
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/35 AFR 36kV",
    "Articlenumber": 20338889
  },
  {
    "Description": "AXLJ-TT 1x240/35 36kV",
    "Articlenumber": 20359018
  },
  {
    "Description": "AXLJ-TT TSLE 1x300/35 AFR 36kV",
    "Articlenumber": 20330877
  },
  {
    "Description": "AXLJ-TT TSLE 1x400/35 AFR 36kV",
    "Articlenumber": 20330899
  },
  {
    "Description": "AXLJ-TT 1x400/35 SR 36kV",
    "Articlenumber": 20436938
  },
  {
    "Description": "AXLJ-TT 1x400/35 SPEC 36kV",
    "Articlenumber": 20454934
  },
  {
    "Description": "AXLJ-TT 1x400/35 36kV",
    "Articlenumber": 20359017
  },
  {
    "Description": "AXLJ-TT TSLE 1x500/35 AFR 36kV",
    "Articlenumber": 20330900
  },
  {
    "Description": "AXLJ-TT 1x500/35 36kV",
    "Articlenumber": 20359019
  },
  {
    "Description": "AXLJ-TT TSLE 1x630/50 AFR 36kV",
    "Articlenumber": 20204659
  },
  {
    "Description": "AXLJ-TT 1x630/35 SR 36kV",
    "Articlenumber": 20441707
  },
  {
    "Description": "AXLJ-TT 1x630/35 36kV",
    "Articlenumber": 20359015
  },
  {
    "Description": "AXLJ-TT 1x800/35 SR 36kV",
    "Articlenumber": 20390358
  },
  {
    "Description": "AXLJ-TT 1x800/35 36kV",
    "Articlenumber": 20359769
  },
  {
    "Description": "AXLJ-TT 3x1x70/25 36kV",
    "Articlenumber": 20489126
  },
  {
    "Description": "AXLJ-TT 3x1x240/35 36kV",
    "Articlenumber": 20489040
  },
  {
    "Description": "AXLJ-TT TSLE 3x1x240/35 AFR 36kV",
    "Articlenumber": 20505817
  },
  {
    "Description": "U-AXLJ-TT 3x25/16 36kV",
    "Articlenumber": 20118935
  },
  {
    "Description": "U-AXLJ-TT 3x35/16 36kV",
    "Articlenumber": 20118862
  },
  {
    "Description": "U-AXLJ-TT 3x50/16 36kV",
    "Articlenumber": 20118861
  },
  {
    "Description": "U-AXLJ-TT 3x70/16 36kV",
    "Articlenumber": 20118631
  },
  {
    "Description": "U-AXLJ-TT 3x95/25 36kV",
    "Articlenumber": 20118626
  },
  {
    "Description": "U-AXLJ-TT 3x120/25 36kV",
    "Articlenumber": 20118630
  },
  {
    "Description": "U-AXLJ-TT 3x150/25 36kV",
    "Articlenumber": 20118629
  },
  {
    "Description": "U-AXLJ-TT 3x185/35 36kV",
    "Articlenumber": 20118628
  },
  {
    "Description": "U-AXLJ-TT 3x240/35 36kV",
    "Articlenumber": 20118627
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/35 AFR 52kV- G�R EJ ATT TILLVERKA",
    "Articlenumber": 20438917
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/35 AFR 52kV",
    "Articlenumber": 20143034
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/35 AFR 52kV Spec",
    "Articlenumber": 20110874
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/35 AFR SPEC 52kV",
    "Articlenumber": 20289480
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/35 AFR 52kV",
    "Articlenumber": 20143500
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/35 AFR SPEC 52kV",
    "Articlenumber": 20294395
  },
  {
    "Description": "AXLJ-TT TSLE 1x400/35 AFR GUL 52kV",
    "Articlenumber": 20386152
  },
  {
    "Description": "FXLJ-TT TSLE 1x50/16 FR 12kV",
    "Articlenumber": 20116824
  },
  {
    "Description": "FXLJ-TT TSLE 1x70/16 FR 12kV",
    "Articlenumber": 20116894
  },
  {
    "Description": "FXLJ-TT TSLE 1x95/25 FR 12kV",
    "Articlenumber": 20116895
  },
  {
    "Description": "FXLJ-TT TSLE 1x120/25 FR 12kV",
    "Articlenumber": 20116948
  },
  {
    "Description": "FXLJ-TT TSLE 1x150/25 FR 12kV",
    "Articlenumber": 20116962
  },
  {
    "Description": "FXLJ-TT TSLE 1x185/35 FR 12kV",
    "Articlenumber": 20116964
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/35 FR 12kV",
    "Articlenumber": 20116965
  },
  {
    "Description": "FXLJ-TT TSLE 1x300/35 FR 12kV",
    "Articlenumber": 20102416
  },
  {
    "Description": "FXLJ-TT TSLE 1x400/35 FR 12kV",
    "Articlenumber": 20116966
  },
  {
    "Description": "FXLJ-TT TSLE 1x500/35 FR 12kV",
    "Articlenumber": 20117044
  },
  {
    "Description": "FXLJ-TT TSLE 1x630/35 FR 12kV",
    "Articlenumber": 20117049
  },
  {
    "Description": "U-FXLJ-TT 3x35/16 12kV",
    "Articlenumber": 20117462
  },
  {
    "Description": "U-FXLJ-TT 3x50/16 12kV",
    "Articlenumber": 20117463
  },
  {
    "Description": "U-FXLJ-TT 3x70/16 12kV",
    "Articlenumber": 20117464
  },
  {
    "Description": "U-FXLJ-TT 3x95/25 12kV",
    "Articlenumber": 20117465
  },
  {
    "Description": "U-FXLJ-TT 3x120/25 12kV",
    "Articlenumber": 20117491
  },
  {
    "Description": "U-FXLJ-TT 3x150/25 12kV",
    "Articlenumber": 20117497
  },
  {
    "Description": "U-FXLJ-TT 3x185/35 12kV",
    "Articlenumber": 20117513
  },
  {
    "Description": "U-FXLJ-TT 3x240/35 12kV",
    "Articlenumber": 20117514
  },
  {
    "Description": "FXLJ-TT TSLE 1x50/16 FR 24kV",
    "Articlenumber": 20117071
  },
  {
    "Description": "FXLJ-TT TSLE 1x70/16 FR 24kV",
    "Articlenumber": 20117078
  },
  {
    "Description": "FXLJ-TT TSLE 1x95/25 FR 24kV",
    "Articlenumber": 20117079
  },
  {
    "Description": "FXLJ-TT TSLE 1x95/25 FR SPEC RED 24kV",
    "Articlenumber": 20509074
  },
  {
    "Description": "FXLJ-TT TSLE 1x120/25 FR 24kV",
    "Articlenumber": 20117080
  },
  {
    "Description": "FXLJ-TT TSLE 1x150/25 FR 24kV",
    "Articlenumber": 20117081
  },
  {
    "Description": "FXLJ-TT TSLE 1x185/35 FR 24kV",
    "Articlenumber": 20117125
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/35 FR 24kV",
    "Articlenumber": 20117126
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/25 FR SPEC 24kV",
    "Articlenumber": 20396778
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/25 FR SPEC RED 24kV",
    "Articlenumber": 20508880
  },
  {
    "Description": "FXLJ-TT TSLE 1x300/35 FR 24kV",
    "Articlenumber": 20117135
  },
  {
    "Description": "FXLJ-TT TSLE 1x400/35 FR 24kV",
    "Articlenumber": 20117136
  },
  {
    "Description": "FXLJ-TT TSLE 1x400/35 FR SPEC RED 24kV",
    "Articlenumber": 20509104
  },
  {
    "Description": "FXLJ-TT TSLE 1x500/35 FR 24kV",
    "Articlenumber": 20117137
  },
  {
    "Description": "FXLJ-TT TSLE 1x630/50 FR 24kV",
    "Articlenumber": 20117138
  },
  {
    "Description": "FXLJ-TT TSLE 1x50/25 FR 36kV",
    "Articlenumber": 20117139
  },
  {
    "Description": "FXLJ-TT TSLE 1x70/25 FR 36kV",
    "Articlenumber": 20117202
  },
  {
    "Description": "FXLJ-TT TSLE 1x95/25 FR 36kV",
    "Articlenumber": 20117206
  },
  {
    "Description": "FXLJ-TT TSLE 1x120/35 FR 36kV",
    "Articlenumber": 20117290
  },
  {
    "Description": "FXLJ-TT TSLE 1x150/35 FR 36kV",
    "Articlenumber": 20117291
  },
  {
    "Description": "FXLJ-TT TSLE 1x185/35 FR 36kV",
    "Articlenumber": 20117292
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/35 FR 36kV",
    "Articlenumber": 20117293
  },
  {
    "Description": "FXLJ-TT TSLE 1x300/35 FR 36kV",
    "Articlenumber": 20117294
  },
  {
    "Description": "FXLJ-TT TSLE 1x400/35 FR 36kV",
    "Articlenumber": 20117296
  },
  {
    "Description": "FXLJ-TT TSLE 1x500/35 FR 36kV",
    "Articlenumber": 20117297
  },
  {
    "Description": "FXLJ-TT TSLE 1x630/50 FR 36kV",
    "Articlenumber": 20117298
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/16 AFR 12kV",
    "Articlenumber": 20102173
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x70/16 AFR 12kV",
    "Articlenumber": 20113259
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 12kV",
    "Articlenumber": 20102174
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x120/25 AFR 12kV",
    "Articlenumber": 20113260
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x120/16 AFR SPEC 12kV",
    "Articlenumber": 20149127
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/25 AFR 12kV",
    "Articlenumber": 20040268
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x185/35 AFR 12kV",
    "Articlenumber": 20113271
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 12kV",
    "Articlenumber": 20078241
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/25 AFR 12kV",
    "Articlenumber": 20235412
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 12kV L1",
    "Articlenumber": 20164677
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/25 AFR 12kV lcAL",
    "Articlenumber": 20478296
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 12kV L2",
    "Articlenumber": 20164678
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 12kV L3",
    "Articlenumber": 20164679
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR 12kV",
    "Articlenumber": 20113272
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/25 AFR SPEC 12kV",
    "Articlenumber": 20335774
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR 12kV",
    "Articlenumber": 20102175
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/35 AFR 12kV",
    "Articlenumber": 20113273
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR 12kV",
    "Articlenumber": 20102176
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR 12kV lcAL",
    "Articlenumber": 20478297
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/50 AFR 12kV",
    "Articlenumber": 20113274
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x1000/50 AFR 12kV-Part Rybinsk",
    "Articlenumber": 20227891
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x50/16 AFR 12kV",
    "Articlenumber": 20087880
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x70/16 AFR 12kV",
    "Articlenumber": 20114706
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x95/25 AFR 12kV",
    "Articlenumber": 20114707
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x120/25 AFR 12kV",
    "Articlenumber": 20114708
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x150/25 AFR 12kV",
    "Articlenumber": 20114709
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x185/35 AFR 12kV",
    "Articlenumber": 20114710
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x240/35 AFR 12kV",
    "Articlenumber": 20102177
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x300/35 AFR 12kV",
    "Articlenumber": 20114711
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x400/35 AFR 12kV",
    "Articlenumber": 20114712
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x500/35 AFR 12kV",
    "Articlenumber": 20114713
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/16 AFR 24kV",
    "Articlenumber": 20102178
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/16 AFR 24kV L1",
    "Articlenumber": 20164680
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/16 AFR 24kV L2",
    "Articlenumber": 20164691
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/16 AFR 24kV L3",
    "Articlenumber": 20164692
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x70/16 AFR 24kV",
    "Articlenumber": 20113275
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 24kV",
    "Articlenumber": 20102179
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 24kV L1",
    "Articlenumber": 20164694
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 24kV L2",
    "Articlenumber": 20164695
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 24kV L3",
    "Articlenumber": 20164696
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x120/25 AFR 24kV",
    "Articlenumber": 20113276
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/25 AFR 24kV",
    "Articlenumber": 20102180
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/25 AFR 24kV L1",
    "Articlenumber": 20164697
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/25 AFR 24kV L2",
    "Articlenumber": 20164698
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/25 AFR 24kV L3",
    "Articlenumber": 20164699
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x185/35 AFR 24kV",
    "Articlenumber": 20113277
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 24kV",
    "Articlenumber": 20102181
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 24kV lcAL",
    "Articlenumber": 20478298
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 24kV L1",
    "Articlenumber": 20164674
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 24kV L2",
    "Articlenumber": 20164675
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 24kV L3",
    "Articlenumber": 20164676
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR 24kV",
    "Articlenumber": 20113278
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR 24kV",
    "Articlenumber": 20102182
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/50 AFR 24kV",
    "Articlenumber": 20150096
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/35 AFR 24kV",
    "Articlenumber": 20113279
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR 24kV",
    "Articlenumber": 20102183
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR 24kV lcAL",
    "Articlenumber": 20478299
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR 24kV -",
    "Articlenumber": 20343814
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/50 AFR 24kV",
    "Articlenumber": 20113280
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x1000/50 AFR 24kV-Part Rybinsk",
    "Articlenumber": 20118907
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x1200/50 AFR 24kV",
    "Articlenumber": 20118927
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x50/16 AFR 24kV",
    "Articlenumber": 20102184
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x70/16 AFR 24kV",
    "Articlenumber": 20115022
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x95/25 AFR 24kV",
    "Articlenumber": 20102185
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x120/25 AFR 24kV",
    "Articlenumber": 20115023
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x150/25 AFR 24kV",
    "Articlenumber": 20102186
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x185/35 AFR 24kV",
    "Articlenumber": 20115024
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x240/35 AFR 24kV",
    "Articlenumber": 20102187
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x240/35 AFR 24kV",
    "Articlenumber": 20504182
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x300/35 AFR 24kV",
    "Articlenumber": 20115025
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x400/35 AFR 24kV",
    "Articlenumber": 20111044
  },
  {
    "Description": "AXLJ-TTCL TSLF 3x1x400/35 AFR 24kV",
    "Articlenumber": 20504187
  },
  {
    "Description": "FXLJ-TT TSLE 1x50/25 FR 42kV",
    "Articlenumber": 20117331
  },
  {
    "Description": "FXLJ-TT TSLE 1x70/25 FR 42kV",
    "Articlenumber": 20117333
  },
  {
    "Description": "FXLJ-TT TSLE 1x95/25 FR 42kV",
    "Articlenumber": 20117334
  },
  {
    "Description": "FXLJ-TT TSLE 1x120/16 FR 42kV",
    "Articlenumber": 20102417
  },
  {
    "Description": "FXLJ-TT TSLE 1x120/35 FR 42kV",
    "Articlenumber": 20117337
  },
  {
    "Description": "FXLJ-TT TSLE 1x150/35 FR 42kV",
    "Articlenumber": 20117338
  },
  {
    "Description": "FXLJ-TT TSLE 1x185/35 FR 42kV",
    "Articlenumber": 20117340
  },
  {
    "Description": "FXLJ-TT TSLE 1x240/35 FR 42kV",
    "Articlenumber": 20100545
  },
  {
    "Description": "FXLJ-TT TSLE 1x300/35 FR 42kV",
    "Articlenumber": 20117352
  },
  {
    "Description": "FXLJ-TT TSLE 1x400/35 FR 42kV",
    "Articlenumber": 20117353
  },
  {
    "Description": "FXLJ-TT TSLE 1x500/35 FR 42kV",
    "Articlenumber": 20117354
  },
  {
    "Description": "FXLJ-TT TSLE 1x630/50 FR 42kV",
    "Articlenumber": 20117355
  },
  {
    "Description": "AXLJ-TT TSLE 1x50/16 AFR SPEC 42kV",
    "Articlenumber": 20138916
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/35 AFR 42kV",
    "Articlenumber": 20153567
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/25 AFR 42kV",
    "Articlenumber": 20122254
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/16 AFR SPEC 42kV",
    "Articlenumber": 20213756
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/25 AFR 42kV",
    "Articlenumber": 20267528
  },
  {
    "Description": "AXLJ-TT TSLE 1x120/25 AFR SPEC 42kV",
    "Articlenumber": 20460224
  },
  {
    "Description": "AXLJ-TT TSLE 1x150/25 AFR 42kV",
    "Articlenumber": 20203131
  },
  {
    "Description": "AXLJ-TT TSLE 1x185/35 AFR 42kV",
    "Articlenumber": 20122260
  },
  {
    "Description": "AXLJ-TT TSLE 1x185/25 AFR SPEC 42kV",
    "Articlenumber": 20273406
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/35 AFR 42kV",
    "Articlenumber": 20163947
  },
  {
    "Description": "AXLJ-TT TSLE 1x240/25 AFR 42kV",
    "Articlenumber": 20258297
  },
  {
    "Description": "AXLJ-TT TSLE 1x300/35 AFR 42kV",
    "Articlenumber": 20389449
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/25 AFR 36kV",
    "Articlenumber": 20114470
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x70/25 AFR 36kV",
    "Articlenumber": 20114471
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x95/25 AFR 36kV",
    "Articlenumber": 20102188
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x120/35 AFR 36kV",
    "Articlenumber": 20114472
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x150/35 AFR 36kV",
    "Articlenumber": 20114473
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x185/35 AFR 36kV",
    "Articlenumber": 20102189
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 36kV",
    "Articlenumber": 20114474
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 36kV lcAL",
    "Articlenumber": 20478341
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR 36kV",
    "Articlenumber": 20102190
  },
  {
    "Description": "AXLJ-TTCL 1x300/35 SR 36kV -",
    "Articlenumber": 20343815
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR 36kV",
    "Articlenumber": 20102191
  },
  {
    "Description": "AXLJ-TTCL 1x400/35 SR 36kV -",
    "Articlenumber": 20343816
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/35 AFR 36kV",
    "Articlenumber": 20102192
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR 36kV",
    "Articlenumber": 20102193
  },
  {
    "Description": "AXLJ-TTCL 1x630/35 VF 36kV",
    "Articlenumber": 20461441
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR 36kV lcAL",
    "Articlenumber": 20478300
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR 36kV",
    "Articlenumber": 20114469
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR SPEC 36kV",
    "Articlenumber": 20175023
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR SPEC 36kV",
    "Articlenumber": 20299385
  },
  {
    "Description": "AXLJ-TTCL 1x630/35 SR 36kV -",
    "Articlenumber": 20343817
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/50 AFR 36kV",
    "Articlenumber": 20114475
  },
  {
    "Description": "U-AXLJ-TTCL TSLF 1x150/35 AFR 72kV",
    "Articlenumber": 20117664
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x185/35 AFR 72kV",
    "Articlenumber": 20117665
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 72kV",
    "Articlenumber": 20111045
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR 72kV",
    "Articlenumber": 20117250
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR 72kV",
    "Articlenumber": 20117667
  },
  {
    "Description": "AXLJ-TTCL 1x400/95 72kV",
    "Articlenumber": 20368538
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR SPEC 72kV",
    "Articlenumber": 20236148
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/50 AFR 72kV",
    "Articlenumber": 20117668
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR 72kV",
    "Articlenumber": 20117218
  },
  {
    "Description": "AXLJ-TTCL 1x630/95 72kV",
    "Articlenumber": 20358178
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR SPEC 72kV",
    "Articlenumber": 20410084
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35AFR SPEC72kV lcAL",
    "Articlenumber": 20478343
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/50 AFR 72kV",
    "Articlenumber": 20121491
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/150 AFR 72kV",
    "Articlenumber": 20451159
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x50/16 AFR+25CU 12kV",
    "Articlenumber": 20115815
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x50/16 AFR+50CU 12kV",
    "Articlenumber": 20115816
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x95/25 AFR+25CU 12kV",
    "Articlenumber": 20119208
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x95/25 AFR+50CU 12kV",
    "Articlenumber": 20119209
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x150/25AFR+25CU 12kV",
    "Articlenumber": 20115817
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x150/25AFR+50CU 12kV",
    "Articlenumber": 20115818
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x240/35AFR+25CU 12kV",
    "Articlenumber": 20115819
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x240/35AFR+50CU 12kV",
    "Articlenumber": 20115820
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x50/16 AFR+25CU 24kV",
    "Articlenumber": 20115757
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x50/16 AFR+50CU 24kV",
    "Articlenumber": 20115758
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x95/25 AFR+25CU 24kV",
    "Articlenumber": 20115648
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x95/25 AFR+50CU 24kV",
    "Articlenumber": 20115649
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x150/25AFR+25CU 24kV",
    "Articlenumber": 20115646
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x150/25AFR+50CU 24kV",
    "Articlenumber": 20115647
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x240/35AFR+25CU 24kV",
    "Articlenumber": 20115087
  },
  {
    "Description": "AXLJ-TTCL TSLF-J 3x1x240/35AFR+50CU 24kV",
    "Articlenumber": 20115645
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x120/25 FR 12kV",
    "Articlenumber": 20488651
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x185/35 FR 12kV",
    "Articlenumber": 20438816
  },
  {
    "Description": "U-FXQJ-TT TSLI 1x500/35 FR F4 12kV",
    "Articlenumber": 20133317
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x630/35 FR 12kV",
    "Articlenumber": 20473068
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x50/16 FR 24kV",
    "Articlenumber": 20115904
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x95/25 FR 24kV",
    "Articlenumber": 20164339
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x120/25 FR SPEC 24kV",
    "Articlenumber": 20463749
  },
  {
    "Description": "U-FXQJ-TT TSLI 1x150/25 FR F4 24kV",
    "Articlenumber": 20164337
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x150/25 FR 24kV",
    "Articlenumber": 20235166
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x150/25 FR RED 24kV",
    "Articlenumber": 20339411
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x150/25FRSPEC RED24kV",
    "Articlenumber": 20509148
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x185/35 FR 24kV",
    "Articlenumber": 20164341
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x240/35 FR 24kV",
    "Articlenumber": 20164335
  },
  {
    "Description": "U-FXQJ-TT TSLI 1x300/35 FR F4 24kV",
    "Articlenumber": 20156827
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x300/35 FR 24kV",
    "Articlenumber": 20232877
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x300/35 FR SPEC 24kV",
    "Articlenumber": 20463762
  },
  {
    "Description": "U-FXQJ-TT TSLI 1x500/35 FR F4 24kV",
    "Articlenumber": 20142565
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x500/35 FR 24kV",
    "Articlenumber": 20233884
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x500/35 FR SPEC 24kV",
    "Articlenumber": 20463750
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x500/35 FR RED 24kV",
    "Articlenumber": 20339413
  },
  {
    "Description": "U-FXQJ-TT TSLI 1x500/35 FR F4 36kV",
    "Articlenumber": 20113351
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x630/50 FR 36kV",
    "Articlenumber": 20263190
  },
  {
    "Description": "FXQJ-TT Pure TSLI 1x630/35 FR SPEC 36kV",
    "Articlenumber": 20308673
  },
  {
    "Description": "U-FXLJ-TT 3x35/16 24kV",
    "Articlenumber": 20117517
  },
  {
    "Description": "U-FXLJ-TT 3x50/16 24kV",
    "Articlenumber": 20117531
  },
  {
    "Description": "U-FXLJ-TT 3x70/16 24kV",
    "Articlenumber": 20117537
  },
  {
    "Description": "U-FXLJ-TT 3x95/25 24kV",
    "Articlenumber": 20117542
  },
  {
    "Description": "U-FXLJ-TT 3x120/25 24kV",
    "Articlenumber": 20117543
  },
  {
    "Description": "U-FXLJ-TT 3x150/25 24kV",
    "Articlenumber": 20117544
  },
  {
    "Description": "U-FXLJ-TT 3x185/35 24kV",
    "Articlenumber": 20117545
  },
  {
    "Description": "U-FXLJ-TT 3x240/35 24kV",
    "Articlenumber": 20117546
  },
  {
    "Description": "AXLJ-TTCL TSLF-O 3x1x50/16 AFR 24kV",
    "Articlenumber": 20126589
  },
  {
    "Description": "AXLJ-TTCL TSLF-O 3x1x95/25 AFR 24kV",
    "Articlenumber": 20126590
  },
  {
    "Description": "AXLJ-TTCL TSLF-O 3x1x150/25 AFR 24kV",
    "Articlenumber": 20126591
  },
  {
    "Description": "AXLJ-TTCL TSLF-O 3x1x240/35 AFR 24kV",
    "Articlenumber": 20126592
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x50/16AFR+25CU 24kV",
    "Articlenumber": 20161824
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x95/25AFR+25CU 24kV",
    "Articlenumber": 20126593
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x95/25AFR+50CU 24kV",
    "Articlenumber": 20126594
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x240/35AFR+25CU24kV",
    "Articlenumber": 20126595
  },
  {
    "Description": "AXLJ-TTCL TSLF-OJ 3x1x240/35AFR+50CU24kV",
    "Articlenumber": 20161832
  },
  {
    "Description": "U-AXALJ-TT 3x25/25 AL 12kV",
    "Articlenumber": 20158257
  },
  {
    "Description": "U-AXALJ-TT 3x50/25 AL 12kV",
    "Articlenumber": 20151640
  },
  {
    "Description": "U-AXALJ-TT 3x70/25 AL 12kV",
    "Articlenumber": 20151641
  },
  {
    "Description": "U-AXALJ-TT 3x95/35 AL 12kV",
    "Articlenumber": 20151642
  },
  {
    "Description": "U-AXALJ-TT 3x120/35 AL 12kV",
    "Articlenumber": 20151643
  },
  {
    "Description": "U-AXALJ-TT 3x150/35 AL 12kV",
    "Articlenumber": 20151644
  },
  {
    "Description": "U-AXALJ-TT 3x185/50 AL 12kV",
    "Articlenumber": 20151645
  },
  {
    "Description": "U-AXALJ-TT 3x240/50 AL 12kV",
    "Articlenumber": 20151646
  },
  {
    "Description": "U-AXALJ-TT 3x300/50 AL 12kV",
    "Articlenumber": 20152032
  },
  {
    "Description": "U-AXALJ-TT 3x400/50 AL 12kV",
    "Articlenumber": 20267374
  },
  {
    "Description": "U-AXALJ-TT 3x25/25 AL 24kV",
    "Articlenumber": 20158170
  },
  {
    "Description": "AXALJ-TT 3x50/25 AL 24kV",
    "Articlenumber": 20151647
  },
  {
    "Description": "U-AXALJ-TT 3x70/25 AL 24kV",
    "Articlenumber": 20151648
  },
  {
    "Description": "U-AXALJ-TT 3x95/35 AL 24kV",
    "Articlenumber": 20151649
  },
  {
    "Description": "U-AXALJ-TT 3x120/35 AL 24kV",
    "Articlenumber": 20152033
  },
  {
    "Description": "U-AXALJ-TT 3x150/35 AL 24kV",
    "Articlenumber": 20151650
  },
  {
    "Description": "U-AXALJ-TT 3x185/50 AL 24kV",
    "Articlenumber": 20152034
  },
  {
    "Description": "U-AXALJ-TT 3x240/50 AL 24kV",
    "Articlenumber": 20151651
  },
  {
    "Description": "U-AXALJ-TT 3x300/50 AL 24kV",
    "Articlenumber": 20152035
  },
  {
    "Description": "U-AXALJ-TT 3x50/25 AL 36kV",
    "Articlenumber": 20152036
  },
  {
    "Description": "U-AXALJ-TT 3x70/25 AL 36kV",
    "Articlenumber": 20152037
  },
  {
    "Description": "U-AXALJ-TT 3x95/35 AL 36kV",
    "Articlenumber": 20152038
  },
  {
    "Description": "U-AXALJ-TT 3x120/35 AL 36kV",
    "Articlenumber": 20152039
  },
  {
    "Description": "U-AXALJ-TT 3x150/35 AL 36kV",
    "Articlenumber": 20152040
  },
  {
    "Description": "U-AXALJ-TT 3x185/50 AL 36kV",
    "Articlenumber": 20152041
  },
  {
    "Description": "U-AXALJ-TT 3x240/50 AL 36kV",
    "Articlenumber": 20152042
  },
  {
    "Description": "U-AXALJ-TT 3x300/50 AL 36kV",
    "Articlenumber": 20300072
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x630/35 FR 12kV",
    "Articlenumber": 20332337
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x400/35 FR 24kV",
    "Articlenumber": 20164349
  },
  {
    "Description": "FXLJ-TTCL TSLF 1x630/50 FR 24kV",
    "Articlenumber": 20154099
  },
  {
    "Description": "AXCLJ-TT 3x25/16 12kV",
    "Articlenumber": 20206410
  },
  {
    "Description": "AXCLJ-TT 3x50/16 12kV",
    "Articlenumber": 20206411
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x50/16 12kV",
    "Articlenumber": 20231433
  },
  {
    "Description": "AXCLJ-TT 3x50/16 12kV -",
    "Articlenumber": 20343818
  },
  {
    "Description": "AXCLJ-TT 3x70/16 12kV",
    "Articlenumber": 20206412
  },
  {
    "Description": "AXCLJ-TT 3x95/25 12kV",
    "Articlenumber": 20206413
  },
  {
    "Description": "AXCLJ-TT 3x95/25 12kV -",
    "Articlenumber": 20343819
  },
  {
    "Description": "AXCLJ-TT 3x120/25 12kV",
    "Articlenumber": 20206414
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x120/16 12kV",
    "Articlenumber": 20229996
  },
  {
    "Description": "U-AXCLJ-TT 3x150/25 12kV",
    "Articlenumber": 20206415
  },
  {
    "Description": "AXCLJ-TT 3x150/25 12kV -",
    "Articlenumber": 20343820
  },
  {
    "Description": "AXCLJ-TT 3x185/35 12kV",
    "Articlenumber": 20206416
  },
  {
    "Description": "AXCLJ-TT 3x240/35 12kV",
    "Articlenumber": 20206417
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x240/25 12kV",
    "Articlenumber": 20229997
  },
  {
    "Description": "AXCLJ-TT 3x240/35 12kV -",
    "Articlenumber": 20343821
  },
  {
    "Description": "AXCLJ-TT 3x300/35 12kV",
    "Articlenumber": 20206418
  },
  {
    "Description": "AXCLJ-TT 3x300/35 12kV -",
    "Articlenumber": 20343822
  },
  {
    "Description": "AXCLJ-TT 3x25/16 24kV",
    "Articlenumber": 20206419
  },
  {
    "Description": "AXCLJ-TT 3x50/16 24kV",
    "Articlenumber": 20206420
  },
  {
    "Description": "AXCLJ-TT 3x50/16 24kV -",
    "Articlenumber": 20343823
  },
  {
    "Description": "AXCLJ-TT 3x70/16 24kV",
    "Articlenumber": 20206421
  },
  {
    "Description": "AXCLJ-TT 3x95/25 24kV",
    "Articlenumber": 20206422
  },
  {
    "Description": "AXCLJ-TT 3x95/25 24kV -",
    "Articlenumber": 20343824
  },
  {
    "Description": "AXCLJ-TT 3x120/25 24kV",
    "Articlenumber": 20206423
  },
  {
    "Description": "AXCLJ-TT 3x150/25 24kV",
    "Articlenumber": 20206424
  },
  {
    "Description": "AXCLJ-TT 3x150/25 24kV -",
    "Articlenumber": 20343825
  },
  {
    "Description": "AXCLJ-TT 3x185/35 24kV",
    "Articlenumber": 20206425
  },
  {
    "Description": "AXCLJ-TT 3x240/35 24kV",
    "Articlenumber": 20206426
  },
  {
    "Description": "AXCLJ-TT 3x240/35 24kV -",
    "Articlenumber": 20343812
  },
  {
    "Description": "AXCLJ-TT 3x300/35 24kV",
    "Articlenumber": 20206427
  },
  {
    "Description": "AXCLJ-TT 3x300/35 24kV -",
    "Articlenumber": 20343813
  },
  {
    "Description": "AXCLJ-TT 3x50/16 36kV",
    "Articlenumber": 20206428
  },
  {
    "Description": "AXCLJ-TT 3x70/16 36kV",
    "Articlenumber": 20206429
  },
  {
    "Description": "AXCLJ-TT 3x95/25 36kV",
    "Articlenumber": 20206430
  },
  {
    "Description": "AXCLJ-TT 3x120/25 36kV",
    "Articlenumber": 20206431
  },
  {
    "Description": "AXCLJ-TT 3x150/25 36kV",
    "Articlenumber": 20206432
  },
  {
    "Description": "AXCLJ-TT 3x185/35 36kV",
    "Articlenumber": 20206433
  },
  {
    "Description": "AXCLJ-TT 3x240/35 36kV",
    "Articlenumber": 20206434
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x50/16 SPEC 12kV",
    "Articlenumber": 20285303
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x120/16 SPEC 12kV",
    "Articlenumber": 20285304
  },
  {
    "Description": "AXCLJ-TT 3x240/35 CU 12kV",
    "Articlenumber": 20263244
  },
  {
    "Description": "AXCLJ-TT AXLJ-TT 3x240/25 SPEC 12kV",
    "Articlenumber": 20285305
  },
  {
    "Description": "AXCLJ-TT 3x50/16 CU 24kV",
    "Articlenumber": 20365580
  },
  {
    "Description": "FXCLJ-TT 3x50/16 CU 12kV",
    "Articlenumber": 20354411
  },
  {
    "Description": "FXCQ-F 1x150 TT RED 36kV",
    "Articlenumber": 20225112
  },
  {
    "Description": "FXCQ-F 1x630 TT BLUE 36kV",
    "Articlenumber": 20214215
  },
  {
    "Description": "AXALJ-TTCL 3x95/35 AL 24kV",
    "Articlenumber": 20280370
  },
  {
    "Description": "AXALJ-TTCL 3x95/35 AL 36kV",
    "Articlenumber": 20266447
  },
  {
    "Description": "AXALJ-TTCL 3x150/35 AL 36kV",
    "Articlenumber": 20266446
  },
  {
    "Description": "AXALJ-TTCL 3x240/50 AL 36kV",
    "Articlenumber": 20298004
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x50/25 AFR 42kV",
    "Articlenumber": 20316382
  },
  {
    "Description": "AXCLJ-TTCL 3x95/25 36kV",
    "Articlenumber": 20336402
  },
  {
    "Description": "AXCLJ-TTCL 3x240/35 36kV",
    "Articlenumber": 20336406
  },
  {
    "Description": "AXLJ-TT ALLGROUND RR 1x240/25 36kV",
    "Articlenumber": 20356129
  },
  {
    "Description": "AXLJ-TT RR 1x400 36kV",
    "Articlenumber": 20356130
  },
  {
    "Description": "AXLJ-TT ALLGROUND RR 1x400 36kV",
    "Articlenumber": 20356291
  },
  {
    "Description": "TSLE ALLGROUND 1x50/16 AFR 24kV",
    "Articlenumber": 20389684
  },
  {
    "Description": "TSLE ALLGROUND 1x95/25 AFR 24kV",
    "Articlenumber": 20429829
  },
  {
    "Description": "TSLE ALLGROUND 1x240/35 AFR 24kV",
    "Articlenumber": 20366769
  },
  {
    "Description": "TSLE ALLGROUND 1x400/35 AFR 24kV",
    "Articlenumber": 20366985
  },
  {
    "Description": "TSLE ALLGROUND 3x1x50/16 AFR 24kV",
    "Articlenumber": 20450429
  },
  {
    "Description": "TSLE ALLGROUND 3x1x95/25 AFR 24kV",
    "Articlenumber": 20372560
  },
  {
    "Description": "TSLE ALLGROUND 3x1x240/35 AFR 24kV",
    "Articlenumber": 20367094
  },
  {
    "Description": "AXALJ-TT 3x50/25 ALCL 12kV",
    "Articlenumber": 20394211
  },
  {
    "Description": "AXALJ-TT 3x95/35 ALCL 12kV",
    "Articlenumber": 20387993
  },
  {
    "Description": "AXALJ-TT 3x120/35 ALCL 12kV",
    "Articlenumber": 20486211
  },
  {
    "Description": "AXALJ-TT 3x150/35 ALCL 12kV",
    "Articlenumber": 20387994
  },
  {
    "Description": "AXALJ-TT 3x240/50 ALCL 12kV",
    "Articlenumber": 20388014
  },
  {
    "Description": "AXALJ-TT 3x300/50 ALCL 12kV",
    "Articlenumber": 20396288
  },
  {
    "Description": "AXALJ-TT 3x400/50 ALCL 12kV",
    "Articlenumber": 20409615
  },
  {
    "Description": "AXALJ-TT 3x50/25 ALCL 24kV",
    "Articlenumber": 20387995
  },
  {
    "Description": "AXALJ-TT 3x95/35 ALCL 24kV",
    "Articlenumber": 20394221
  },
  {
    "Description": "AXALJ-TT 3x150/35 ALCL 24kV",
    "Articlenumber": 20394173
  },
  {
    "Description": "AXALJ-TT 3x185/50 ALCL 24kV",
    "Articlenumber": 20493587
  },
  {
    "Description": "AXALJ-TT 3x240/50 ALCL 24kV",
    "Articlenumber": 20387253
  },
  {
    "Description": "AXALJ-TT 3x300/50 ALCL 24kV",
    "Articlenumber": 20413857
  },
  {
    "Description": "AXALJ-TT 3x400/50 ALCL 24kV",
    "Articlenumber": 20436947
  },
  {
    "Description": "AXALJ-TT 3x150/35 ALCL 36kV",
    "Articlenumber": 20437005
  },
  {
    "Description": "AXALJ-TT 3x185/50 ALCL 36kV",
    "Articlenumber": 20461395
  },
  {
    "Description": "AXALJ-TT 3x240/50 ALCL 36kV",
    "Articlenumber": 20473272
  },
  {
    "Description": "AXALJ-TT 3x300/50 ALCL 36kV",
    "Articlenumber": 20451314
  },
  {
    "Description": "AXALJ-TTCL 3x240/50 ALCL 12kV",
    "Articlenumber": 20479790
  },
  {
    "Description": "AXLJ-TT 1x70/16 SPEC 36kV",
    "Articlenumber": 20508524
  },
  {
    "Description": "AXLJ-TT 1x120/25 SPEC 36kV",
    "Articlenumber": 20413790
  },
  {
    "Description": "AXLJ-TT 1x120/35 SPEC 36kV",
    "Articlenumber": 20491957
  },
  {
    "Description": "AXLJ-TT 1x150/25 SPEC 36kV",
    "Articlenumber": 20413789
  },
  {
    "Description": "AXLJ-TT 1x240/35 SPEC 36kV",
    "Articlenumber": 20413831
  },
  {
    "Description": "AXLJ-TT 1x240/25 SPEC 36kV",
    "Articlenumber": 20508420
  },
  {
    "Description": "AXLJ-TT 1x300/35 SPEC 36kV",
    "Articlenumber": 20423918
  },
  {
    "Description": "AXLJ-TT 1x500/35 SPEC 36kV",
    "Articlenumber": 20413832
  },
  {
    "Description": "AXLJ-TT 1x630/35 SPEC 36kV",
    "Articlenumber": 20496407
  },
  {
    "Description": "AXLJ-TT 1x800/35 SPEC 36kV",
    "Articlenumber": 20413833
  },
  {
    "Description": "AXLJ-TT 1x800/50 SPEC 36kV",
    "Articlenumber": 20491962
  },
  {
    "Description": "AXLJ-TTCL TSLF-OF 1x400/35 AFR 24kV",
    "Articlenumber": 20420029
  },
  {
    "Description": "AXALJ-TT E Path 3x50/25 ALCL 12kV",
    "Articlenumber": 20423948
  },
  {
    "Description": "AXALJ-TT E Path 3x95/35 ALCL 12kV",
    "Articlenumber": 20423899
  },
  {
    "Description": "AXALJ-TT E Path 3x150/35 ALCL 12kV",
    "Articlenumber": 20423896
  },
  {
    "Description": "AXALJ-TT E Path 3x240/50 ALCL 12kV",
    "Articlenumber": 20423814
  },
  {
    "Description": "AXALJ-TT E Path 3x300/50 ALCL 12kV",
    "Articlenumber": 20424721
  },
  {
    "Description": "AXALJ-TT E Path 3x400/50 ALCL 12kV",
    "Articlenumber": 20424656
  },
  {
    "Description": "AXALJ-TT E Path 3x50/25 ALCL 24kV",
    "Articlenumber": 20423897
  },
  {
    "Description": "AXALJ-TT E Path 3x95/35 ALCL 24kV",
    "Articlenumber": 20423949
  },
  {
    "Description": "AXALJ-TT E Path 3x150/35 ALCL 24kV",
    "Articlenumber": 20423950
  },
  {
    "Description": "AXALJ-TT E Path 3x240/50 ALCL 24kV",
    "Articlenumber": 20423898
  },
  {
    "Description": "AXALJ-TT E Path 3x300/50 ALCL 24kV",
    "Articlenumber": 20424655
  },
  {
    "Description": "AXALJ-TT E Path 3x400/50 ALCL 24kV",
    "Articlenumber": 20424722
  },
  {
    "Description": "AXALJ-TT E Path 3x150/35 ALCL 36kV",
    "Articlenumber": 20480648
  },
  {
    "Description": "TRV-AXLJ TT 1x240/80 36kV",
    "Articlenumber": 20431039
  },
  {
    "Description": "TRV-AXLJ TT 1x500/80 36kV",
    "Articlenumber": 20431126
  },
  {
    "Description": "AXLJ-TTCL 1x240/35 VF 52kV",
    "Articlenumber": 20439119
  },
  {
    "Description": "AXLJ-TTCL 1x630/35 VF 52kV",
    "Articlenumber": 20491009
  },
  {
    "Description": "AXLJ-TTCL 1x1000/50 SR 52kV -",
    "Articlenumber": 20461247
  },
  {
    "Description": "AMALJ-TT 3x95/35 ALCL 12kV",
    "Articlenumber": 20482328
  },
  {
    "Description": "AMALJ-TT E Path 3x150/35 ALCL 12kV",
    "Articlenumber": 20484174
  },
  {
    "Description": "AMALJ-TT 3x240/50 ALCL 12kV",
    "Articlenumber": 20450379
  },
  {
    "Description": "AMALJ-TT E Path 3x240/50 ALCL 12kV lcAL",
    "Articlenumber": 20496389
  },
  {
    "Description": "AMALJ-TT E Path 3x400/50 ALCL 12kV lcAL",
    "Articlenumber": 20496468
  },
  {
    "Description": "AMLJ-TTCL ESLF 1x630/50 AFR 24kV",
    "Articlenumber": 20506506
  },
  {
    "Description": "AMLJ-TTCL ESLF 1x800/50 AFR 24kV",
    "Articlenumber": 20507585
  },
  {
    "Description": "AMCLJ-TT 3x240/35 24kV lcAL",
    "Articlenumber": 20507592
  },
  {
    "Description": "AXLJ-TT 1x630/35 SR 52kV",
    "Articlenumber": 20510187
  },
  {
    "Description": "AXLJ-FCL 3x1x150/16 52kV",
    "Articlenumber": 20111254
  },
  {
    "Description": "U-AXLJ-TTCL TSLF 1x150/35 AFR 52kV",
    "Articlenumber": 20389594
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x240/35 AFR 52kV",
    "Articlenumber": 20111047
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR 52kV",
    "Articlenumber": 20165484
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x300/35 AFR SPEC 52kV",
    "Articlenumber": 20225577
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x400/35 AFR 52kV",
    "Articlenumber": 20159537
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/50 AFR 52kV",
    "Articlenumber": 20183095
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x500/35 AFR 52kV",
    "Articlenumber": 20111048
  },
  {
    "Description": "AXLJ-TTCL TSLF HD 1x500/50 AFR 52kV",
    "Articlenumber": 20184633
  },
  {
    "Description": "U-AXLJ-TTCL TSLF 1x500/35 AFR SPEC 52kV",
    "Articlenumber": 20344290
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/50 AFR 52kV",
    "Articlenumber": 20113584
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/95 AFR 52kV",
    "Articlenumber": 20436677
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35 AFR SPEC 52kV",
    "Articlenumber": 20482823
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x630/35AFR SPEC52kV lcAL",
    "Articlenumber": 20478342
  },
  {
    "Description": "U-AXLJ-TTCL TSLF 1x630/35 AFR SPEC 52kV",
    "Articlenumber": 20230390
  },
  {
    "Description": "AXLJ-TTCL TSLF HD 1x630/50 AFR 52kV",
    "Articlenumber": 20193473
  },
  {
    "Description": "U-AXLJ-TTCL TSLF 1x630/35 AFR SPEC 52kV",
    "Articlenumber": 20290287
  },
  {
    "Description": "AXLJ-TTCL TSLF 1x800/50 AFR 52kV",
    "Articlenumber": 20173864
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x240/35 AFR F4 72kV",
    "Articlenumber": 20197229
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x400/35 AFR 72kV",
    "Articlenumber": 20415665
  },
  {
    "Description": "U-AXQJ-TT TSLI 1x800/50 AFR F4 72kV",
    "Articlenumber": 20197230
  },
  {
    "Description": "AXQJ-TT Pure TSLI 1x800/50 AFR 72kV",
    "Articlenumber": 20229876
  },
  {
    "Description": "PEX-AL-LRT 1x240+35 52kV",
    "Articlenumber": 20308838
  },
  {
    "Description": "PEX-AL-LRT 1x240+75 52kV",
    "Articlenumber": 20450788
  },
  {
    "Description": "PEX-AL-LRT 1x800+75 52kV",
    "Articlenumber": 20509137
  },
  {
    "Description": "U-PEX-AL-LRT 1x150+25 72kV",
    "Articlenumber": 20391374
  },
  {
    "Description": "PEX-AL-LRT 1x240+35 72kV",
    "Articlenumber": 20393925
  },
  {
    "Description": "PEX-AL-LRT 1x240+35 72kV",
    "Articlenumber": 20387585
  },
  {
    "Description": "PEX-AL-LRT 1x300+35 72kV",
    "Articlenumber": 20301710
  },
  {
    "Description": "PEX-AL-LRT 1x300+25 72kV",
    "Articlenumber": 20263136
  },
  {
    "Description": "PEX-AL-LRT 1x400+50 72kV",
    "Articlenumber": 20132789
  },
  {
    "Description": "PEX-AL-LRT 1x400+50 (35+ALU) 72kV",
    "Articlenumber": 20367128
  },
  {
    "Description": "PEX-AL-LRT 1x500+50 72kV",
    "Articlenumber": 20439078
  },
  {
    "Description": "PEX-AL-LRT 1x630+50 72kV",
    "Articlenumber": 20132791
  },
  {
    "Description": "PEX-AL-LRT 1x630+50 72kV",
    "Articlenumber": 20397663
  },
  {
    "Description": "PEX-AL-LRT 1x630+50 AL 72kV",
    "Articlenumber": 20268512
  },
  {
    "Description": "PEX-AL-LRT 1x630+70 72kV",
    "Articlenumber": 20407975
  },
  {
    "Description": "PEX-AL-LRT 1x800+50 72kV",
    "Articlenumber": 20299380
  },
  {
    "Description": "PEX-AL-LRT 1x1000+95 72kV",
    "Articlenumber": 20454933
  },
  {
    "Description": "U-AXKJ-F 1x240/35 LT F4 72kV",
    "Articlenumber": 20102194
  },
  {
    "Description": "U-AXQJ-F 1x400/35 LT F4 52kV",
    "Articlenumber": 20131645
  },
  {
    "Description": "PEX-AL-LT 1x240+75 52kV",
    "Articlenumber": 20169567
  },
  {
    "Description": "PEX-AL-LT 1x500+75 52kV",
    "Articlenumber": 20169548
  },
  {
    "Description": "PEX-AL-LT 1x800+75 52kV",
    "Articlenumber": 20362689
  },
  {
    "Description": "PEX-AL-LT 3x150+35 12kV",
    "Articlenumber": 20170210
  },
  {
    "Description": "PEX-AL-LT 3x240+35 12kV",
    "Articlenumber": 20170221
  },
  {
    "Description": "PEX-AL-LT 3x300+35 12kV",
    "Articlenumber": 20170222
  },
  {
    "Description": "PEX-CU-CT RM 1x25+16 FR 12kV",
    "Articlenumber": 20170272
  },
  {
    "Description": "PEX-CU-CT RM 1x50+16 FR 12kV",
    "Articlenumber": 20170273
  },
  {
    "Description": "PEX-CU-CT RM 1x95+25 FR 12kV",
    "Articlenumber": 20170243
  },
  {
    "Description": "PEX-CU-CT RM 1x150+25 FR 12kV",
    "Articlenumber": 20170229
  },
  {
    "Description": "PEX-CU-CT RM 1x240+35 FR 12kV",
    "Articlenumber": 20204677
  },
  {
    "Description": "PEX-AL-LT RMF 1x300+50 36kV",
    "Articlenumber": 20170275
  },
  {
    "Description": "PEX-AL-LT 3x50+16 FR 12kV",
    "Articlenumber": 20204679
  },
  {
    "Description": "PEX-AL-LT 3x150+35 FR 12kV",
    "Articlenumber": 20173900
  },
  {
    "Description": "PEX-AL-LT 3x240+35 FR 12kV",
    "Articlenumber": 20173899
  },
  {
    "Description": "PEX-AL-LT 3x300+35 FR 12kV",
    "Articlenumber": 20204680
  },
  {
    "Description": "AXCL-F 1x800 TT BLUE 66kV",
    "Articlenumber": 20266834
  },
  {
    "Description": "AXCL-F 1x800 TT YELLOW 66kV",
    "Articlenumber": 20266835
  },
  {
    "Description": "EAXeCeWB 1x70/16 42kV",
    "Articlenumber": 20463887
  },
  {
    "Description": "EAXeCeWB 1x120/25 42kV",
    "Articlenumber": 20506054
  },
  {
    "Description": "EAXeCeWB 1x240/25 42kV",
    "Articlenumber": 20391360
  },
  {
    "Description": "PEX-CU-CT RM 1x25+16 FR 24kV",
    "Articlenumber": 20397014
  },
  {
    "Description": "PEX-AL-LT 1x95+25 24kV",
    "Articlenumber": 20409669
  },
  {
    "Description": "XMK-ALM-S 3x95/25 12kV",
    "Articlenumber": 20110880
  },
  {
    "Description": "XMK-ALM-S 3x150/25 12kV",
    "Articlenumber": 20102195
  },
  {
    "Description": "XMK-ALM-S 3x240/35 12kV",
    "Articlenumber": 20102196
  },
  {
    "Description": "XMK-ALM-S 3x300/35 12kV",
    "Articlenumber": 20102197
  },
  {
    "Description": "U-TSLP 1x150 FR/25 HALVFABR 24kV",
    "Articlenumber": 20168443
  },
  {
    "Description": "PEX-AL-CT RM 1x150+25 12kV",
    "Articlenumber": 20152623
  },
  {
    "Description": "PEX-AL-CT RM 1x150+25 FR 12kV",
    "Articlenumber": 20170648
  },
  {
    "Description": "PEX-AL-CT RM 1x240+35 FR 12kV",
    "Articlenumber": 20170233
  },
  {
    "Description": "PEX-AL-CT RM 1x400+35 FR 12kV",
    "Articlenumber": 20204678
  },
  {
    "Description": "PEX-AL-CT RM 1x400+35 12kV",
    "Articlenumber": 20395641
  },
  {
    "Description": "PEX-AL-CT RM 1x630+50 12kV",
    "Articlenumber": 20170241
  },
  {
    "Description": "PEX-AL-CT RM 3x50+16 12kV",
    "Articlenumber": 20118047
  },
  {
    "Description": "PEX-AL-CT RM 3x95+25 12kV",
    "Articlenumber": 20118048
  },
  {
    "Description": "PEX-AL-CT RM 3x150+25 12kV",
    "Articlenumber": 20118049
  },
  {
    "Description": "PEX-AL-CT RM 3x240+35 12kV",
    "Articlenumber": 20118050
  },
  {
    "Description": "PEX-AL-CT RM 3x300+35 12kV",
    "Articlenumber": 20118051
  },
  {
    "Description": "PEX-AL-CT 1x240+35 FR 17,5kV",
    "Articlenumber": 20453022
  },
  {
    "Description": "PEX-AL-CT RM 3x150+25 17,5kV",
    "Articlenumber": 20415467
  },
  {
    "Description": "PEX-AL-CT RM 3x240+35 17,5kV",
    "Articlenumber": 20415454
  },
  {
    "Description": "U-PEX-AL-CT 1x500+35 24kV",
    "Articlenumber": 20110447
  },
  {
    "Description": "PEX-AL-LRT 1x500+35 24kV",
    "Articlenumber": 20268387
  },
  {
    "Description": "AXLJ-FCL 1x300/35 LT SPEC 24kV",
    "Articlenumber": 20372024
  },
  {
    "Description": "YMeKrvasdlwd 1x240 alrm as25 24kV",
    "Articlenumber": 20387815
  },
  {
    "Description": "YMeKrvasdlwd 1x400 alrm as50 24kV",
    "Articlenumber": 20512309
  },
  {
    "Description": "YMeKrvasdlwd 1x630 alrm as50 24kV",
    "Articlenumber": 20384795
  },
  {
    "Description": "PEX-AL-LRT-CL 1x300+35 36kV",
    "Articlenumber": 20384511
  },
  {
    "Description": "PEX-CU-LRT 1x240+50 FR 12kV",
    "Articlenumber": 20400119
  },
  {
    "Description": "YMeKrvaslqwd 1x240 alrm as35 24kV",
    "Articlenumber": 20400974
  },
  {
    "Description": "YMeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20423327
  },
  {
    "Description": "U-YMeKrvaslqwd 3x240Alrm as50 20kV",
    "Articlenumber": 20411279
  },
  {
    "Description": "AHXAMK-W 3x150AL+35CU 36kV",
    "Articlenumber": 20416598
  },
  {
    "Description": "N2XS(FL)2Y 1x120 RM/25 24kV",
    "Articlenumber": 20433258
  },
  {
    "Description": "N2XS(FL)2Y 1x240 RM/25 24kV",
    "Articlenumber": 20433259
  },
  {
    "Description": "N2XS(FL)2Y 1x500 RM/25 24kV",
    "Articlenumber": 20433264
  },
  {
    "Description": "PEX-AL 3x240+35 12kV",
    "Articlenumber": 20434428
  },
  {
    "Description": "PEX-CU-CT 1x400+35 FR 12kV",
    "Articlenumber": 20460924
  },
  {
    "Description": "AHXCAMK-W 1x150/25 36kV",
    "Articlenumber": 20470174
  },
  {
    "Description": "AHXCAMK-W 1x240/25 36kV",
    "Articlenumber": 20470209
  },
  {
    "Description": "AHXCAMK-W 1x500/35 36kV",
    "Articlenumber": 20470175
  },
  {
    "Description": "AHXCAMK-W 1x800/35 36kV",
    "Articlenumber": 20470210
  },
  {
    "Description": "TSXF HD 1x95/25 AFR LT 24kV",
    "Articlenumber": 20471624
  },
  {
    "Description": "TSXF HD 1x150/25 AFR LT 24kV",
    "Articlenumber": 20471623
  },
  {
    "Description": "TSXF HD 1x240/35 AFR LT 24kV",
    "Articlenumber": 20471602
  },
  {
    "Description": "TSXF HD 1x400/35 AFR LT 24kV",
    "Articlenumber": 20471559
  },
  {
    "Description": "TSXF HD 1x630/50 AFR LT 24kV",
    "Articlenumber": 20471625
  },
  {
    "Description": "TSXF HD 3x1x240/35 AFR LT 24kV",
    "Articlenumber": 20508497
  },
  {
    "Description": "TSXF HD 3x1x400/35 AFR LT 24kV",
    "Articlenumber": 20508515
  },
  {
    "Description": "PEX-AL 3x150+25 17,5kV",
    "Articlenumber": 20474804
  },
  {
    "Description": "PEX-AL 3x240+35 17,5kV",
    "Articlenumber": 20474882
  },
  {
    "Description": "PEX-AL 3x300+35 17,5kV",
    "Articlenumber": 20488508
  },
  {
    "Description": "RH5Z1-OL 1x630 AL2-HERSATENE RED 30kV",
    "Articlenumber": 20488023
  },
  {
    "Description": "ARP1H5EX 1x185 FASE 1 12/20kV",
    "Articlenumber": 20494060
  },
  {
    "Description": "ARP1H5EX 1x185 FASE 2 12/20kV",
    "Articlenumber": 20494291
  },
  {
    "Description": "ARP1H5EX 1x185 FASE 3 12/20kV",
    "Articlenumber": 20494177
  },
  {
    "Description": "ESXF HD 1x400/35 AFR LT 24kV",
    "Articlenumber": 20502606
  },
  {
    "Description": "ESXF HD 1x630/50 AFR LT 24kV",
    "Articlenumber": 20505745
  },
  {
    "Description": "ESXF HD PRY-ID 1x400/35 AFR LT 24kV",
    "Articlenumber": 20508290
  },
  {
    "Description": "P1MeKrvaslqwd 3x240 Alrm as35 20kV",
    "Articlenumber": 20512046
  },
  {
    "Description": "U-CU-XLPE-LSF-AWA-LSF 1x70/16 12kV",
    "Articlenumber": 20153460
  },
  {
    "Description": "AL-XLPE-CWS-PE 1x35/25 24kV",
    "Articlenumber": 20166695
  },
  {
    "Description": "AL-XLPE-CWS-PE 1x50/35 24kV",
    "Articlenumber": 20290547
  },
  {
    "Description": "AL-XLPE-CWS-PE 1x25/16 12kV",
    "Articlenumber": 20168691
  },
  {
    "Description": "NA2XS(F)2Y 1x120 RM/16 36kV",
    "Articlenumber": 20496549
  },
  {
    "Description": "NA2XS(F)2Y 1x150 RM/25 36kV",
    "Articlenumber": 20496611
  },
  {
    "Description": "NA2XS(F)2Y 1x300 RM/25 36kV",
    "Articlenumber": 20496520
  },
  {
    "Description": "NA2XS(F)2Y 1x400 RM/35 36kV",
    "Articlenumber": 20501195
  },
  {
    "Description": "NA2XS(F)2Y 1x500 RM/35 36kV",
    "Articlenumber": 20496499
  },
  {
    "Description": "NA2XS(F)2Y 1x630 RM/35 36kV",
    "Articlenumber": 20463927
  },
  {
    "Description": "NA2XS(F)2Y 1x800 RM/35 36kV",
    "Articlenumber": 20501276
  },
  {
    "Description": "AHMAMK-W 1x150AL 24kV",
    "Articlenumber": 20509883
  },
  {
    "Description": "AHMAMK-W 1x185AL 24kV",
    "Articlenumber": 20509927
  },
  {
    "Description": "AHMAMK-W 1x240AL 24kV",
    "Articlenumber": 20509926
  },
  {
    "Description": "AHMAMK-W 1x300AL 24kV",
    "Articlenumber": 20509925
  },
  {
    "Description": "AHXCMK-WTC/PE 3x300/35 12kV",
    "Articlenumber": 20123917
  },
  {
    "Description": "NA2XS(F)2Y 1x120 RM/16 24kV",
    "Articlenumber": 20487690
  },
  {
    "Description": "NA2XS(F)2Y 1x240 RM/25 24kV",
    "Articlenumber": 20420291
  },
  {
    "Description": "NA2XS(F)2Y 1x300 RM/35 24kV",
    "Articlenumber": 20440544
  },
  {
    "Description": "NA2XS(F)2Y 1x500 RM/35 24kV",
    "Articlenumber": 20434865
  },
  {
    "Description": "NA2XS(F)2Y 3x1x240 RM/25 24kV",
    "Articlenumber": 20481972
  },
  {
    "Description": "FXC-F PPL 1x50 LT RED 24kV",
    "Articlenumber": 20205344
  },
  {
    "Description": "FXC-F PPL 1x50 LT BLUE 24kV",
    "Articlenumber": 20205345
  },
  {
    "Description": "FXC-F PPL 1x50 LT YELLOW 24kV",
    "Articlenumber": 20205346
  },
  {
    "Description": "FXC-F PPL 1x150 LT RED 24kV",
    "Articlenumber": 20205350
  },
  {
    "Description": "FXC-F PPL 1x150 LT BLUE 24kV",
    "Articlenumber": 20205351
  },
  {
    "Description": "FXC-F PPL 1x150 LT YELLOW 24kV",
    "Articlenumber": 20205352
  },
  {
    "Description": "FXC-F PPL 1x240 LT RED 24kV",
    "Articlenumber": 20193272
  },
  {
    "Description": "FXC-F PPL 1x240 LT BLUE 24kV",
    "Articlenumber": 20193273
  },
  {
    "Description": "FXC-F PPL 1x240 LT YELLOW 24kV",
    "Articlenumber": 20193274
  },
  {
    "Description": "TXSE NO 3x25 FR/16 LT HALVFABR 24kV",
    "Articlenumber": 20164355
  },
  {
    "Description": "TXSE 3x35 FR/16 LT HALVFABR 24kV",
    "Articlenumber": 20131148
  },
  {
    "Description": "AHXAMK-WP 3x50AL 12kV",
    "Articlenumber": 20118245
  },
  {
    "Description": "AHXAMK-WP 3x70AL 12kV",
    "Articlenumber": 20118270
  },
  {
    "Description": "AHXAMK-WP 3x95AL 12kV",
    "Articlenumber": 20118271
  },
  {
    "Description": "AHXAMK-WP 3x120AL 12kV",
    "Articlenumber": 20118274
  },
  {
    "Description": "AHXAMK-WP 3x150AL 12kV",
    "Articlenumber": 20118275
  },
  {
    "Description": "AHXAMK-WP 3x185AL 12kV",
    "Articlenumber": 20118342
  },
  {
    "Description": "AHXAMK-WP 3x240AL 12kV",
    "Articlenumber": 20118346
  },
  {
    "Description": "AHXAMK-WP 3x300AL 12kV",
    "Articlenumber": 20118388
  },
  {
    "Description": "AHXAMK-WP 3x50AL 24kV",
    "Articlenumber": 20118392
  },
  {
    "Description": "AHXAMK-WP 3x70AL 24kV",
    "Articlenumber": 20118394
  },
  {
    "Description": "AHXAMK-WP 3x95AL 24kV",
    "Articlenumber": 20118395
  },
  {
    "Description": "AHXAMK-WP 3x120AL 24kV",
    "Articlenumber": 20118396
  },
  {
    "Description": "AHXAMK-WP 3x150AL 24kV",
    "Articlenumber": 20118397
  },
  {
    "Description": "AHXAMK-WP 3x185AL 24kV",
    "Articlenumber": 20118398
  },
  {
    "Description": "AHXAMK-WP 3x240AL 24kV",
    "Articlenumber": 20118475
  },
  {
    "Description": "AHXAMK-WP 3x300AL 24kV",
    "Articlenumber": 20118476
  },
  {
    "Description": "FXCL-F 1x50 LT YELLOW 24kV",
    "Articlenumber": 20149647
  },
  {
    "Description": "FXCL-F 1x50 LT RED 24kV",
    "Articlenumber": 20149648
  },
  {
    "Description": "FXCL-F 1x50 LT BLUE 24kV",
    "Articlenumber": 20149649
  },
  {
    "Description": "FXCL-F 1x95 TT BLUE 24kV",
    "Articlenumber": 20149509
  },
  {
    "Description": "FXCL-F 1x95 TT RED 24kV",
    "Articlenumber": 20149651
  },
  {
    "Description": "FXCL-F 1x95 TT YELLOW  24kV",
    "Articlenumber": 20149652
  },
  {
    "Description": "FXCL-F 1x150 LT RED 24kV",
    "Articlenumber": 20366150
  },
  {
    "Description": "FXCL-F 1x185 LT RED 24kV",
    "Articlenumber": 20366271
  },
  {
    "Description": "FXCL-F 1x240 LT RED 24kV",
    "Articlenumber": 20261884
  },
  {
    "Description": "FXCL-F 1x240 LT BLUE 24kV",
    "Articlenumber": 20261885
  },
  {
    "Description": "FXCL-F 1x240 LT YELLOW 24kV",
    "Articlenumber": 20261886
  },
  {
    "Description": "FXCL-F 1x400 LT RED 24kV",
    "Articlenumber": 20366149
  },
  {
    "Description": "FXCL-F 1x120 TT BLUE 36kV",
    "Articlenumber": 20149599
  },
  {
    "Description": "FXCL-F 1x120 TT RED 36kV",
    "Articlenumber": 20149645
  },
  {
    "Description": "FXCL-F 1x120 TT YELLOW 36kV",
    "Articlenumber": 20149646
  },
  {
    "Description": "FXCL-FCL 1x185 LT 36kV",
    "Articlenumber": 20102198
  },
  {
    "Description": "AHXAMK-W 3x50AL+35CU 12kV",
    "Articlenumber": 20118178
  },
  {
    "Description": "AHXAMK-W 3x70AL+35CU 12kV",
    "Articlenumber": 20118179
  },
  {
    "Description": "AHXAMK-W 3x95AL+35CU 12kV",
    "Articlenumber": 20088773
  },
  {
    "Description": "AHXAMK-W 3x120AL+35CU 12kV",
    "Articlenumber": 20078178
  },
  {
    "Description": "AHXAMK-W 3x150AL+35CU 12kV",
    "Articlenumber": 20102199
  },
  {
    "Description": "AHXAMK-W 3x185AL+35CU 12kV",
    "Articlenumber": 20102200
  },
  {
    "Description": "AHXAMK-W 3x240AL+35CU 12kV",
    "Articlenumber": 20102201
  },
  {
    "Description": "AHXAMK-W 3x300AL+35CU 12kV",
    "Articlenumber": 20102202
  },
  {
    "Description": "AHXAMK-W 3x300AL+70CU 12kV",
    "Articlenumber": 20155529
  },
  {
    "Description": "AHXAMK-W 1x95AL 24kV",
    "Articlenumber": 20121865
  },
  {
    "Description": "AHXAMK-W 1x150AL 24kV",
    "Articlenumber": 20148024
  },
  {
    "Description": "AHXAMK-W 1x185AL 24kV",
    "Articlenumber": 20173387
  },
  {
    "Description": "AHXAMK-W 3x50AL+35CU 24kV",
    "Articlenumber": 20118180
  },
  {
    "Description": "AHXAMK-W 3x70AL+35CU 24kV",
    "Articlenumber": 20102203
  },
  {
    "Description": "AHXAMK-W 3x95AL+35CU 24kV",
    "Articlenumber": 20102204
  },
  {
    "Description": "AHXAMK-W 3x120AL+35CU 24kV",
    "Articlenumber": 20078168
  },
  {
    "Description": "AHXAMK-W 3x150AL+35CU 24kV",
    "Articlenumber": 20102205
  },
  {
    "Description": "AHXAMK-W 3x185AL+35CU 24kV",
    "Articlenumber": 20102206
  },
  {
    "Description": "AHXAMK-W 3x240AL+35CU 24kV",
    "Articlenumber": 20078171
  },
  {
    "Description": "AHXAMK-W 3x300AL+35CU 24kV",
    "Articlenumber": 20113038
  },
  {
    "Description": "AHXAMK-W 3x300AL+70CU 24kV",
    "Articlenumber": 20102207
  },
  {
    "Description": "TXSI 1x25/16 FR 24kV",
    "Articlenumber": 20316380
  },
  {
    "Description": "GENERATORKABEL 1x95 17,5kV",
    "Articlenumber": 20155550
  },
  {
    "Description": "PEX-ISOL AL-R�R 1x30/18 12kV",
    "Articlenumber": 20481590
  },
  {
    "Description": "U-PEX-ISOL AL-R�R 1x30/18 12kV",
    "Articlenumber": 20168267
  },
  {
    "Description": "RXCQ 1x185/195 36kV",
    "Articlenumber": 20119340
  },
  {
    "Description": "MOTORKABEL 1x258 61,5kV",
    "Articlenumber": 20268654
  },
  {
    "Description": "MOTORKABEL 1x258 MED MANTEL 61,5kV",
    "Articlenumber": 20268868
  },
  {
    "Description": "U-MOTORKABEL 1x232 60kV",
    "Articlenumber": 20102400
  },
  {
    "Description": "MOTORKABEL 1x232 60kV",
    "Articlenumber": 20268655
  },
  {
    "Description": "AXCL-FCL 1x120 LT YELLOW 36kV",
    "Articlenumber": 20137840
  },
  {
    "Description": "AXCL-FCL 1x120 LT RED 36kV",
    "Articlenumber": 20137841
  },
  {
    "Description": "AXCL-FCL 1x120 LT BLUE 36kV",
    "Articlenumber": 20137842
  },
  {
    "Description": "AXCL-FCL 1x400 LT YELLOW 36kV",
    "Articlenumber": 20137843
  },
  {
    "Description": "AXCL-FCL 1x400 LT RED 36kV",
    "Articlenumber": 20137844
  },
  {
    "Description": "AXCL-FCL 1x400 LT BLUE 36kV",
    "Articlenumber": 20137845
  },
  {
    "Description": "AXCL-FCL 1x500 LT YELLOW 36kV",
    "Articlenumber": 20137846
  },
  {
    "Description": "AXCL-FCL 1x500 LT RED 36kV",
    "Articlenumber": 20137847
  },
  {
    "Description": "AXCL-FCL 1x500 LT BLUE 36kV",
    "Articlenumber": 20137848
  },
  {
    "Description": "AXCL-FCL 1x800 LT YELLOW 36kV",
    "Articlenumber": 20137849
  },
  {
    "Description": "AXCL-FCL 1x800 LT RED 36kV",
    "Articlenumber": 20137850
  },
  {
    "Description": "AXCL-FCL 1x800 LT BLUE 36kV",
    "Articlenumber": 20137851
  },
  {
    "Description": "AXCL-FCL 1x240 TT L1 36kV",
    "Articlenumber": 20182962
  },
  {
    "Description": "AXCL-FCL 1x240 TT L2 36kV",
    "Articlenumber": 20182963
  },
  {
    "Description": "AXCL-FCL 1x240 TT L3 36kV",
    "Articlenumber": 20182964
  },
  {
    "Description": "AXCL-FCL 1x800 TT L1 36kV",
    "Articlenumber": 20183201
  },
  {
    "Description": "AXCL-FCL 1x800 TT L2 36kV",
    "Articlenumber": 20183202
  },
  {
    "Description": "AXCL-FCL 1x800 TT L3 36kV",
    "Articlenumber": 20183203
  },
  {
    "Description": "FXCL-F 1x120 TT RED 36kV",
    "Articlenumber": 20162554
  },
  {
    "Description": "FXCL-F 1x120 TT BLUE 36kV",
    "Articlenumber": 20162203
  },
  {
    "Description": "FXCL-F 1x120 TT YELLOW 36kV",
    "Articlenumber": 20162555
  },
  {
    "Description": "FXCL-F 1x300 TT RED 36kV",
    "Articlenumber": 20162556
  },
  {
    "Description": "FXCL-F 1x300 TT BLUE 36kV",
    "Articlenumber": 20162204
  },
  {
    "Description": "FXCL-F 1x300 TT YELLOW 36kV",
    "Articlenumber": 20162557
  },
  {
    "Description": "FXCL-F 1x400 TT RED 36kV",
    "Articlenumber": 20162558
  },
  {
    "Description": "FXCL-F 1x400 TT YELLOW 36kV",
    "Articlenumber": 20162559
  },
  {
    "Description": "FXCL-F 1x400 TT BLUE 36kV",
    "Articlenumber": 20162205
  },
  {
    "Description": "FXCL-F 1x800 TT BLUE 36kV",
    "Articlenumber": 20164000
  },
  {
    "Description": "FXCL-F 1x800 TT RED 36kV",
    "Articlenumber": 20164001
  },
  {
    "Description": "FXCL-F 1x800 TT YELLOW 36kV",
    "Articlenumber": 20164002
  },
  {
    "Description": "FXCL-FCL 1x150 LT BLUE 24kV",
    "Articlenumber": 20153560
  },
  {
    "Description": "FXCL-FCL 1x150 LT RED 24kV",
    "Articlenumber": 20153561
  },
  {
    "Description": "FXCL-FCL 1x150 LT YELLOW 24kV",
    "Articlenumber": 20153562
  },
  {
    "Description": "FXCL-FCL 1x240 LT BLUE 24kV",
    "Articlenumber": 20163303
  },
  {
    "Description": "FXCL-FCL 1x240 LT YELLOW 24kV",
    "Articlenumber": 20164089
  },
  {
    "Description": "FXCL-FCL 1x240 LT RED 24kV",
    "Articlenumber": 20164088
  },
  {
    "Description": "FXCL-FCL 1x95/16 TT BLUE 36kV",
    "Articlenumber": 20117227
  },
  {
    "Description": "FXCL-FCL 1x95/16 TT RED 36kV",
    "Articlenumber": 20117228
  },
  {
    "Description": "FXCL-FCL 1x95/16 TT YELLOW 36kV",
    "Articlenumber": 20117229
  },
  {
    "Description": "FXCL-FCL 1x150 TT RED 36kV",
    "Articlenumber": 20197719
  },
  {
    "Description": "FXCL-FCL 1x150 TT BLUE 36kV",
    "Articlenumber": 20197720
  },
  {
    "Description": "FXCL-FCL 1x150 TT YELLOW 36kV",
    "Articlenumber": 20197721
  },
  {
    "Description": "FXCL-FCL 1x240/25 TT BLUE 36kV",
    "Articlenumber": 20114127
  },
  {
    "Description": "FXCL-FCL 1x240/25 TT RED 36kV",
    "Articlenumber": 20114128
  },
  {
    "Description": "FXCL-FCL 1x240/25 TT YELLOW 36kV",
    "Articlenumber": 20114129
  },
  {
    "Description": "FXCL-FCL 1x240 LT RED 36kV",
    "Articlenumber": 20198043
  },
  {
    "Description": "FXCL-FCL 1x240 LT BLUE 36kV",
    "Articlenumber": 20198044
  },
  {
    "Description": "FXCL-FCL 1x240 LT YELLOW 36kV",
    "Articlenumber": 20198045
  },
  {
    "Description": "FXCL-FCL 1x300/25 TT 36kV",
    "Articlenumber": 20102208
  },
  {
    "Description": "FXCL-FCL 1x400/35 TT BLUE 36kV",
    "Articlenumber": 20112412
  },
  {
    "Description": "FXCL-FCL 1x400/35 TT YELLOW 36kV",
    "Articlenumber": 20113068
  },
  {
    "Description": "FXCL-FCL 1x400/35 TT RED 36kV",
    "Articlenumber": 20113069
  },
  {
    "Description": "FXCL-FCL 1x500 TT L1 36kV",
    "Articlenumber": 20227550
  },
  {
    "Description": "FXCL-FCL 1x500 TT L2 36kV",
    "Articlenumber": 20227571
  },
  {
    "Description": "FXCL-FCL 1x500 TT L3 36kV",
    "Articlenumber": 20227572
  },
  {
    "Description": "FXCL-FCL 1x630/35 TT 36kV",
    "Articlenumber": 20102209
  },
  {
    "Description": "FXCL-FCL 1x630/35 TT 36kV",
    "Articlenumber": 20102210
  },
  {
    "Description": "FXCL-FCL 1x630 TT RED 36kV",
    "Articlenumber": 20197183
  },
  {
    "Description": "FXCL-FCL 1x630 TT BLUE 36kV",
    "Articlenumber": 20197184
  },
  {
    "Description": "FXCL-FCL 1x630 TT YELLOW 36kV",
    "Articlenumber": 20197185
  },
  {
    "Description": "FXCL-FCL 1x630/31 TT L1 36kV",
    "Articlenumber": 20156293
  },
  {
    "Description": "FXCL-FCL 1x630/31 TT L2 36kV",
    "Articlenumber": 20156294
  },
  {
    "Description": "FXCL-FCL 1x630/31 TT L3 36kV",
    "Articlenumber": 20156295
  },
  {
    "Description": "FXCL-FCL 1x630 LT RED 36kV",
    "Articlenumber": 20198046
  },
  {
    "Description": "FXCL-FCL 1x630 LT BLUE 36kV",
    "Articlenumber": 20198047
  },
  {
    "Description": "FXCL-FCL 1x630 LT YELLOW 36kV",
    "Articlenumber": 20198048
  },
  {
    "Description": "FXCL-FCL 1x800 TT L1 36kV",
    "Articlenumber": 20182950
  },
  {
    "Description": "FXCL-FCL 1x800 TT L2 36kV",
    "Articlenumber": 20182951
  },
  {
    "Description": "FXCL-FCL 1x800 TT L3 36kV",
    "Articlenumber": 20182952
  },
  {
    "Description": "FXCL-FSC 1x50 TT RED 24kV",
    "Articlenumber": 20197120
  },
  {
    "Description": "FXCL-FSC 1x50 TT RED 24kV",
    "Articlenumber": 20257645
  },
  {
    "Description": "FXCL-FSC 1x50 TT BLUE 24kV",
    "Articlenumber": 20197131
  },
  {
    "Description": "FXCL-FSC 1x50 TT BLUE 24kV",
    "Articlenumber": 20257647
  },
  {
    "Description": "FXCL-FSC 1x50 TT YELLOW 24kV",
    "Articlenumber": 20197132
  },
  {
    "Description": "FXCL-FSC 1x50 TT YELLOW 24kV",
    "Articlenumber": 20257646
  },
  {
    "Description": "FXCL-FSC 1x95 TT RED 24kV",
    "Articlenumber": 20219102
  },
  {
    "Description": "FXCL-FSC 1x95 TT RED 24kV",
    "Articlenumber": 20257648
  },
  {
    "Description": "FXCL-FSC 1x95 TT BLUE 24kV",
    "Articlenumber": 20219100
  },
  {
    "Description": "FXCL-FSC 1x95 TT BLUE 24kV",
    "Articlenumber": 20257649
  },
  {
    "Description": "FXCL-FSC 1x95 TT YELLOW 24kV",
    "Articlenumber": 20219101
  },
  {
    "Description": "FXCL-FSC 1x95 TT YELLOW 24kV",
    "Articlenumber": 20257650
  },
  {
    "Description": "FXCL-FSC 1x240 TT RED 24kV",
    "Articlenumber": 20267604
  },
  {
    "Description": "FXCL-FSC 1x240 TT BLUE 24kV",
    "Articlenumber": 20267605
  },
  {
    "Description": "FXCL-FSC 1x240 TT YELLOW 24kV",
    "Articlenumber": 20267606
  },
  {
    "Description": "FXCL-FSC 1x240 TT RED 36kV",
    "Articlenumber": 20197040
  },
  {
    "Description": "FXCL-FSC 1x240 TT RED 36kV",
    "Articlenumber": 20257661
  },
  {
    "Description": "FXCL-FSC 1x240 TT BLUE 36kV",
    "Articlenumber": 20197091
  },
  {
    "Description": "FXCL-FSC 1x240 TT BLUE 36kV",
    "Articlenumber": 20257662
  },
  {
    "Description": "FXCL-FSC 1x240 TT YELLOW 36kV",
    "Articlenumber": 20197092
  },
  {
    "Description": "FXCL-FSC 1x240 TT YELLOW 36kV",
    "Articlenumber": 20257663
  },
  {
    "Description": "FXCL-FSC 1x240 TT RED 36kV",
    "Articlenumber": 20351788
  },
  {
    "Description": "FXCL-FSC 1x240 TT BLUE 36kV",
    "Articlenumber": 20351789
  },
  {
    "Description": "FXCL-FSC 1x240 TT YELLOW 36kV",
    "Articlenumber": 20351790
  },
  {
    "Description": "FXCL-FSC 1x240 TT YELLOW 36kV",
    "Articlenumber": 20436236
  },
  {
    "Description": "FXCL-FSC 1x240 TT BLUE 36kV",
    "Articlenumber": 20436157
  },
  {
    "Description": "FXCL-FSC 1x240 TT RED 36kV",
    "Articlenumber": 20436237
  },
  {
    "Description": "FXCL-FSC 1x400 TT RED 36kV",
    "Articlenumber": 20505012
  },
  {
    "Description": "FXCL-FSC 1x400 TT BLUE 36kV",
    "Articlenumber": 20505021
  },
  {
    "Description": "FXCL-FSC 1x400 TT YELLOW 36kV",
    "Articlenumber": 20504850
  },
  {
    "Description": "U-AKKJ 3x50/16 F4 SEKT",
    "Articlenumber": 20102211
  },
  {
    "Description": "U-AKKJ 3x70/21 F4 SEKT",
    "Articlenumber": 20102213
  },
  {
    "Description": "U-AKKJ 3x95/29 F4 SEKT",
    "Articlenumber": 20102214
  },
  {
    "Description": "U-AKKJ 3x120/41 F4 SEKT",
    "Articlenumber": 20102215
  },
  {
    "Description": "U-AKKJ 3x150/41 F4 SEKT",
    "Articlenumber": 20102216
  },
  {
    "Description": "U-AKKJ 3x185/57 F4 SEKT",
    "Articlenumber": 20102217
  },
  {
    "Description": "U-AKKJ 3x240/72 F4 SEKT",
    "Articlenumber": 20102218
  },
  {
    "Description": "U-AKKJ 3x300/88 F4 SEKT",
    "Articlenumber": 20102219
  },
  {
    "Description": "U-AKKJ 4x50/16 F4 SEKT",
    "Articlenumber": 20102220
  },
  {
    "Description": "U-AKKJ 4x70/21 F4 SEKT",
    "Articlenumber": 20102221
  },
  {
    "Description": "U-AKKJ 4x95/29 F4 SEKT",
    "Articlenumber": 20102222
  },
  {
    "Description": "U-AKKJ 4x120/41 F4 SEKT",
    "Articlenumber": 20078252
  },
  {
    "Description": "U-AKKJ 4x150/41 F4 SEKT",
    "Articlenumber": 20102223
  },
  {
    "Description": "U-AKKJ 4x185/57 F4 SEKT",
    "Articlenumber": 20078254
  },
  {
    "Description": "U-AKKJ 4x240/72 F4 SEKT",
    "Articlenumber": 20102224
  },
  {
    "Description": "U-AKKJ 4x300/88 F4 SEKT",
    "Articlenumber": 20102226
  },
  {
    "Description": "TRV-AXLJ TT 1x240/50 3,6kV",
    "Articlenumber": 20430993
  },
  {
    "Description": "TRV-AXLJ TT 1x500/50 3,6kV",
    "Articlenumber": 20431038
  },
  {
    "Description": "AXL 1x240",
    "Articlenumber": 20436067
  },
  {
    "Description": "FXCL 1x240 LT 3,6kV",
    "Articlenumber": 20458920
  },
  {
    "Description": "U-FKKJ 3x16/16 F3",
    "Articlenumber": 20075355
  },
  {
    "Description": "U-FKKJ 3x35/16 F4",
    "Articlenumber": 20131600
  },
  {
    "Description": "U-FKKJ 3x120/70 F4 SEKT",
    "Articlenumber": 20132266
  },
  {
    "Description": "U-FKKJ 3x185/95 F4 SEKT",
    "Articlenumber": 20133530
  },
  {
    "Description": "U-FKKJ 3x240/120 F4 SEKT",
    "Articlenumber": 20132267
  },
  {
    "Description": "U-FKKJ 4x25/16 F4",
    "Articlenumber": 20132236
  },
  {
    "Description": "U-FKKJ 4x35/16 F4",
    "Articlenumber": 20131621
  },
  {
    "Description": "U-FKKJ 4x50/25 F4 SEKT",
    "Articlenumber": 20132255
  },
  {
    "Description": "U-FKKJ 4x120/70 F4 SEKT",
    "Articlenumber": 20132259
  },
  {
    "Description": "U-FKKJ 4x150/70 F4 SEKT",
    "Articlenumber": 20132263
  },
  {
    "Description": "U-FKKJ 4x240/120 F4 SEKT",
    "Articlenumber": 20132265
  },
  {
    "Description": "U-SE-N1XE-R 4G16",
    "Articlenumber": 20102227
  },
  {
    "Description": "U-SE-N1XE-R 4G16 GUL",
    "Articlenumber": 20102228
  },
  {
    "Description": "U-SE-N1XE-R 5G16",
    "Articlenumber": 20102229
  },
  {
    "Description": "U-SE-N1XE-R 5G16 GUL",
    "Articlenumber": 20102230
  },
  {
    "Description": "U-SE-N1XE-AS 4G50",
    "Articlenumber": 20102231
  },
  {
    "Description": "SE-N1XE-AS 4G50 RT",
    "Articlenumber": 20386766
  },
  {
    "Description": "U-SE-N1XE-AS 4G95",
    "Articlenumber": 20102232
  },
  {
    "Description": "SE-N1XE-AS 4G95 RT",
    "Articlenumber": 20386864
  },
  {
    "Description": "SE-N1XE-AS 4G95 SPEC",
    "Articlenumber": 20102233
  },
  {
    "Description": "U-SE-N1XE-AS 4G150",
    "Articlenumber": 20102234
  },
  {
    "Description": "SE-N1XE-AS 4G150 RT",
    "Articlenumber": 20386865
  },
  {
    "Description": "SE-N1XE-AS 4G150 SPEC",
    "Articlenumber": 20102235
  },
  {
    "Description": "U-SE-N1XE-AS 4G240",
    "Articlenumber": 20102236
  },
  {
    "Description": "SE-N1XE-AS 4G240 RT",
    "Articlenumber": 20386866
  },
  {
    "Description": "SE-N1XE-AS 4G240 RT lcAL",
    "Articlenumber": 20478344
  },
  {
    "Description": "SE-N1XE-AS 4G240 SPEC",
    "Articlenumber": 20102237
  },
  {
    "Description": "SE-N1XE-AS 4G300 RT",
    "Articlenumber": 20408000
  },
  {
    "Description": "U-SE-N1XZ1-R 4G16",
    "Articlenumber": 20102238
  },
  {
    "Description": "U-SE-N1XZ1-R 5G16",
    "Articlenumber": 20102239
  },
  {
    "Description": "SE-N1XZ1-AS 4G50",
    "Articlenumber": 20102240
  },
  {
    "Description": "SE-N1XZ1-AS 4G95",
    "Articlenumber": 20102241
  },
  {
    "Description": "SE-N1XZ1-AS 4G150",
    "Articlenumber": 20102242
  },
  {
    "Description": "SE-N1XZ1-AS 4G240",
    "Articlenumber": 20102243
  },
  {
    "Description": "SE-N1XZ1-AS Pure 4G50",
    "Articlenumber": 20383021
  },
  {
    "Description": "SE-N1XZ1-AS Pure 4G95",
    "Articlenumber": 20383195
  },
  {
    "Description": "SE-N1XZ1-AS Pure 4G150",
    "Articlenumber": 20383253
  },
  {
    "Description": "SE-N1XZ1-AS Pure 4G240",
    "Articlenumber": 20383344
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G50",
    "Articlenumber": 20405983
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G50 GUL",
    "Articlenumber": 20395315
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G95",
    "Articlenumber": 20405984
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G95 GUL",
    "Articlenumber": 20395314
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G150",
    "Articlenumber": 20405985
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G150 GUL",
    "Articlenumber": 20395198
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G240",
    "Articlenumber": 20405840
  },
  {
    "Description": "SE-N1XE-AS ALLGROUND 4G240 GUL",
    "Articlenumber": 20395197
  },
  {
    "Description": "AXQJ Pure 1x500/150 SVART",
    "Articlenumber": 20234746
  },
  {
    "Description": "U-AXQJ 3x35/15 F4",
    "Articlenumber": 20169097
  },
  {
    "Description": "AXQJ Pure 3x35/15",
    "Articlenumber": 20194950
  },
  {
    "Description": "U-AXQJ 3x50/15 F4 SEKT",
    "Articlenumber": 20102244
  },
  {
    "Description": "AXQJ Pure 3x50/15",
    "Articlenumber": 20193373
  },
  {
    "Description": "U-AXQJ 3x70/21 F4 SEKT",
    "Articlenumber": 20102245
  },
  {
    "Description": "AXQJ Pure 3x70/21",
    "Articlenumber": 20193374
  },
  {
    "Description": "U-AXQJ 3x95/29 F4 SEKT",
    "Articlenumber": 20102246
  },
  {
    "Description": "AXQJ Pure 3x95/29",
    "Articlenumber": 20193375
  },
  {
    "Description": "U-AXQJ 3x120/41 F4 SEKT",
    "Articlenumber": 20102247
  },
  {
    "Description": "AXQJ Pure 3x120/41",
    "Articlenumber": 20193376
  },
  {
    "Description": "U-AXQJ 3x150/41 F4 SEKT",
    "Articlenumber": 20102248
  },
  {
    "Description": "AXQJ Pure 3x150/41",
    "Articlenumber": 20193377
  },
  {
    "Description": "U-AXQJ 3x185/57 F4 SEKT",
    "Articlenumber": 20102249
  },
  {
    "Description": "AXQJ Pure 3x185/57",
    "Articlenumber": 20193378
  },
  {
    "Description": "U-AXQJ 3x240/72 F4 SEKT",
    "Articlenumber": 20102250
  },
  {
    "Description": "AXQJ Pure 3x240/72",
    "Articlenumber": 20193379
  },
  {
    "Description": "AXQJ Pure 3x240/72 GUL",
    "Articlenumber": 20267678
  },
  {
    "Description": "U-AXQJ 3x300/88 F4 SEKT",
    "Articlenumber": 20102251
  },
  {
    "Description": "AXQJ Pure 3x300/88",
    "Articlenumber": 20193380
  },
  {
    "Description": "U-AXQJ 4x35/15 F4",
    "Articlenumber": 20169045
  },
  {
    "Description": "AXQJ Pure 4x35/15",
    "Articlenumber": 20194949
  },
  {
    "Description": "U-AXQJ 4x50/15 F4 SEKT",
    "Articlenumber": 20102252
  },
  {
    "Description": "AXQJ Pure 4x50/15",
    "Articlenumber": 20193381
  },
  {
    "Description": "U-AXQJ 4x70/21 F4 SEKT",
    "Articlenumber": 20102253
  },
  {
    "Description": "AXQJ Pure 4x70/21",
    "Articlenumber": 20193382
  },
  {
    "Description": "U-AXQJ 4x95/29 F4 SEKT",
    "Articlenumber": 20102254
  },
  {
    "Description": "AXQJ Pure 4x95/29",
    "Articlenumber": 20193383
  },
  {
    "Description": "U-AXQJ 4x120/41 F4 SEKT",
    "Articlenumber": 20102255
  },
  {
    "Description": "AXQJ Pure 4x120/41",
    "Articlenumber": 20193384
  },
  {
    "Description": "U-AXQJ 4x150/41 F4 SEKT",
    "Articlenumber": 20102256
  },
  {
    "Description": "AXQJ Pure 4x150/41",
    "Articlenumber": 20193385
  },
  {
    "Description": "U-AXQJ 4x185/57 F4 SEKT",
    "Articlenumber": 20102257
  },
  {
    "Description": "AXQJ Pure 4x185/57",
    "Articlenumber": 20193386
  },
  {
    "Description": "U-AXQJ 4x240/72 F4 SEKT",
    "Articlenumber": 20102258
  },
  {
    "Description": "AXQJ Pure 4x240/72",
    "Articlenumber": 20193387
  },
  {
    "Description": "U-AXQJ 4x300/88 F4 SEKT",
    "Articlenumber": 20102259
  },
  {
    "Description": "AXQJ Pure 4x300/88",
    "Articlenumber": 20193388
  },
  {
    "Description": "TRV-AXQJ TT Pure 1x240/50 3,6kV",
    "Articlenumber": 20431011
  },
  {
    "Description": "TRV-AXQJ TT Pure 1x500/50 3,6kV",
    "Articlenumber": 20430980
  },
  {
    "Description": "AXQJ Pure 3x50/29 FULLSK�RM",
    "Articlenumber": 20312757
  },
  {
    "Description": "AXQJ Pure 3x95/57 FULLSK�RM",
    "Articlenumber": 20312758
  },
  {
    "Description": "AXQJ Pure 3x150/88 FULLSK�RM",
    "Articlenumber": 20312759
  },
  {
    "Description": "AXQJ Pure 3x240/146 FULLSK�RM",
    "Articlenumber": 20312760
  },
  {
    "Description": "U-AXQJ 4x50/29 F4 SEKT FULLSK�RM",
    "Articlenumber": 20102260
  },
  {
    "Description": "AXQJ Pure 4x50/29 FULLSK�RM",
    "Articlenumber": 20193389
  },
  {
    "Description": "U-AXQJ 4x95/57 F4 SEKT FULLSK�RM",
    "Articlenumber": 20102261
  },
  {
    "Description": "AXQJ Pure 4x95/57 FULLSK�RM",
    "Articlenumber": 20193390
  },
  {
    "Description": "U-AXQJ 4x150/88 F4 SEKT FULLSK�RM",
    "Articlenumber": 20102262
  },
  {
    "Description": "AXQJ Pure 4x150/88 FULLSK�RM",
    "Articlenumber": 20193391
  },
  {
    "Description": "U-AXQJ 4x240/146 F4 SEKT FULLSK�RM",
    "Articlenumber": 20102263
  },
  {
    "Description": "AXQJ Pure 4x240/146 FULLSK�RM",
    "Articlenumber": 20193392
  },
  {
    "Description": "NO-N1XZ1-AR 5G25 PROLIGHT",
    "Articlenumber": 20113648
  },
  {
    "Description": "NO-N1XZ1-AR 5G50 PROLIGHT",
    "Articlenumber": 20113652
  },
  {
    "Description": "U-AXQ 1x95 F4",
    "Articlenumber": 20167914
  },
  {
    "Description": "U-AXQ 1x240 F4",
    "Articlenumber": 20212263
  },
  {
    "Description": "AXQ 1x240",
    "Articlenumber": 20257552
  },
  {
    "Description": "U-AXQ 1x300 F4",
    "Articlenumber": 20167913
  },
  {
    "Description": "U-AXQ 3G185 F4 SEKT",
    "Articlenumber": 20167917
  },
  {
    "Description": "U-AXQ 3G300 F4 SEKT",
    "Articlenumber": 20167916
  },
  {
    "Description": "U-AXQ 4G35 F4",
    "Articlenumber": 20167918
  },
  {
    "Description": "U-AXQ 4G70 F4 SEKT",
    "Articlenumber": 20167922
  },
  {
    "Description": "U-AXQ 4G95 F4 SEKT",
    "Articlenumber": 20167920
  },
  {
    "Description": "U-AXQ 4G120 F4 SEKT",
    "Articlenumber": 20167923
  },
  {
    "Description": "U-AXQ 4G150 F4 SEKT",
    "Articlenumber": 20167919
  },
  {
    "Description": "U-AXQ 4G185 F4 SEKT",
    "Articlenumber": 20167924
  },
  {
    "Description": "U-AXQ 4G240 F4 SEKT",
    "Articlenumber": 20167925
  },
  {
    "Description": "U-AXQ 4G300 F4 SEKT",
    "Articlenumber": 20167926
  },
  {
    "Description": "U-AXQ 5G25 F4",
    "Articlenumber": 20167912
  },
  {
    "Description": "U-AXQ 5G50 F4",
    "Articlenumber": 20168009
  },
  {
    "Description": "U-FXQJ-EMC 1x50 FR/50",
    "Articlenumber": 20102264
  },
  {
    "Description": "FXQJ-EMC Pure 1x50 FR/50",
    "Articlenumber": 20195006
  },
  {
    "Description": "U-FXQJ-EMC 1x95 FR/50",
    "Articlenumber": 20102265
  },
  {
    "Description": "FXQJ-EMC Pure 1x95 FR/50",
    "Articlenumber": 20195007
  },
  {
    "Description": "U-FXQJ-EMC 1x150 FR/50",
    "Articlenumber": 20102266
  },
  {
    "Description": "FXQJ-EMC Pure 1x150 FR/50",
    "Articlenumber": 20195008
  },
  {
    "Description": "U-FXQJ-EMC 1x240 FR/50",
    "Articlenumber": 20102267
  },
  {
    "Description": "FXQJ-EMC Pure 1x240 FR/50",
    "Articlenumber": 20195009
  },
  {
    "Description": "U-FXQJ-EMC 1x300 FR/50",
    "Articlenumber": 20155012
  },
  {
    "Description": "FXQJ-EMC Pure 1x300 FR/50",
    "Articlenumber": 20195010
  },
  {
    "Description": "U-FXQJ-EMC 1x500 FR/10/50",
    "Articlenumber": 20175651
  },
  {
    "Description": "FXQJ-EMC Pure 1x500 FR/10/50",
    "Articlenumber": 20398334
  },
  {
    "Description": "U-FXQJ-EMC 1x630 FR/50",
    "Articlenumber": 20102268
  },
  {
    "Description": "FXQJ-EMC Pure 1x630 FR/50",
    "Articlenumber": 20195011
  },
  {
    "Description": "U-FXQJ-EMC 2x16 FR/16",
    "Articlenumber": 20102269
  },
  {
    "Description": "U-FXQJ-EMC Pure 2x16 FR/16",
    "Articlenumber": 20194951
  },
  {
    "Description": "U-FXQJ-EMC 2x25 FR/16",
    "Articlenumber": 20102270
  },
  {
    "Description": "U-FXQJ-EMC Pure 2x25 FR/16",
    "Articlenumber": 20194994
  },
  {
    "Description": "U-FXQJ-EMC 3x16 FR/16",
    "Articlenumber": 20102271
  },
  {
    "Description": "U-FXQJ-EMC Pure 3x16 FR/16",
    "Articlenumber": 20193393
  },
  {
    "Description": "U-FXQJ-EMC 3x25 FR/16",
    "Articlenumber": 20091036
  },
  {
    "Description": "FXQJ-EMC Pure 3x25 FR/16",
    "Articlenumber": 20193394
  },
  {
    "Description": "U-FXQJ-EMC 3x35 FR/16",
    "Articlenumber": 20078260
  },
  {
    "Description": "FXQJ-EMC Pure 3x35 FR/16",
    "Articlenumber": 20193395
  },
  {
    "Description": "U-FXQJ-EMC 3x50 FV/25",
    "Articlenumber": 20078261
  },
  {
    "Description": "FXQJ-EMC Pure 3x50 FV/25",
    "Articlenumber": 20193396
  },
  {
    "Description": "U-FXQJ-EMC 3x70 FV/35",
    "Articlenumber": 20078301
  },
  {
    "Description": "FXQJ-EMC Pure 3x70 FV/35",
    "Articlenumber": 20193397
  },
  {
    "Description": "U-FXQJ-EMC 3x95 FV/50",
    "Articlenumber": 20078302
  },
  {
    "Description": "FXQJ-EMC Pure 3x95 FV/50",
    "Articlenumber": 20193398
  },
  {
    "Description": "U-FXQJ-EMC 3x120 FV/70",
    "Articlenumber": 20078304
  },
  {
    "Description": "FXQJ-EMC Pure 3x120 FV/70",
    "Articlenumber": 20193399
  },
  {
    "Description": "U-FXQJ-EMC 3x150 FV/70",
    "Articlenumber": 20078306
  },
  {
    "Description": "FXQJ-EMC Pure 3x150 FV/70",
    "Articlenumber": 20193400
  },
  {
    "Description": "U-FXQJ-EMC 3x185 FV/95",
    "Articlenumber": 20078310
  },
  {
    "Description": "FXQJ-EMC Pure 3x185 FV/95",
    "Articlenumber": 20193401
  },
  {
    "Description": "U-FXQJ-EMC 3x240 FV/120",
    "Articlenumber": 20078309
  },
  {
    "Description": "FXQJ-EMC Pure 3x240 FV/120",
    "Articlenumber": 20193402
  },
  {
    "Description": "FXQJ-EMC 3x300 FV/150",
    "Articlenumber": 20389400
  },
  {
    "Description": "U-FXQJ-EMC 4x16 FR/16",
    "Articlenumber": 20078313
  },
  {
    "Description": "U-FXQJ-EMC Pure 4x16 FR/16",
    "Articlenumber": 20193403
  },
  {
    "Description": "U-FXQJ-EMC 4x25 FR/16",
    "Articlenumber": 20078259
  },
  {
    "Description": "FXQJ-EMC Pure 4x25 FR/16",
    "Articlenumber": 20193404
  },
  {
    "Description": "U-FXQJ-EMC 4x35 FR/16",
    "Articlenumber": 20078317
  },
  {
    "Description": "FXQJ-EMC Pure 4x35 FR/16",
    "Articlenumber": 20193405
  },
  {
    "Description": "U-FXQJ-EMC 4x50 FV/25",
    "Articlenumber": 20078300
  },
  {
    "Description": "FXQJ-EMC Pure 4x50 FV/25",
    "Articlenumber": 20193406
  },
  {
    "Description": "U-FXQJ-EMC 4x70 FV/35",
    "Articlenumber": 20078416
  },
  {
    "Description": "FXQJ-EMC Pure 4x70 FV/35",
    "Articlenumber": 20193407
  },
  {
    "Description": "U-FXQJ-EMC 4x95 FV/50",
    "Articlenumber": 20078303
  },
  {
    "Description": "FXQJ-EMC Pure 4x95 FV/50",
    "Articlenumber": 20193408
  },
  {
    "Description": "U-FXQJ-EMC 4x120 FV/70",
    "Articlenumber": 20078305
  },
  {
    "Description": "FXQJ-EMC Pure 4x120 FV/70",
    "Articlenumber": 20193409
  },
  {
    "Description": "U-FXQJ-EMC 4x150 FV/70",
    "Articlenumber": 20078307
  },
  {
    "Description": "FXQJ-EMC Pure 4x150 FV/70",
    "Articlenumber": 20193410
  },
  {
    "Description": "U-FXQJ-EMC 4x185 FV/95",
    "Articlenumber": 20102272
  },
  {
    "Description": "FXQJ-EMC Pure 4x185 FV/95",
    "Articlenumber": 20193411
  },
  {
    "Description": "U-FXQJ-EMC 4x240 FV/120",
    "Articlenumber": 20078311
  },
  {
    "Description": "FXQJ-EMC Pure 4x240 FV/120",
    "Articlenumber": 20193412
  },
  {
    "Description": "FXQJ-EMC Pure 4G240 FV/120 SPEC",
    "Articlenumber": 20311363
  },
  {
    "Description": "U-AXQJ-EMC 3x25 AFR/10",
    "Articlenumber": 20078837
  },
  {
    "Description": "AXQJ-EMC Pure 3x25 AFR/10",
    "Articlenumber": 20212859
  },
  {
    "Description": "U-AXQJ-EMC 3x50 AFV/16",
    "Articlenumber": 20078871
  },
  {
    "Description": "AXQJ-EMC Pure 3x50 AFV/16",
    "Articlenumber": 20212860
  },
  {
    "Description": "U-AXQJ-EMC 3x95 AFV/35",
    "Articlenumber": 20078314
  },
  {
    "Description": "AXQJ-EMC Pure 3x95 AFV/35",
    "Articlenumber": 20212861
  },
  {
    "Description": "U-AXQJ-EMC 3x150 AFV/50",
    "Articlenumber": 20078872
  },
  {
    "Description": "AXQJ-EMC Pure 3x150 AFV/50",
    "Articlenumber": 20212862
  },
  {
    "Description": "U-AXQJ-EMC 3x240 AFV/70",
    "Articlenumber": 20078714
  },
  {
    "Description": "AXQJ-EMC Pure 3x240 AFV/70",
    "Articlenumber": 20212863
  },
  {
    "Description": "U-AXQJ-EMC 4x25 AFR/10",
    "Articlenumber": 20102273
  },
  {
    "Description": "AXQJ-EMC Pure 4x25 AFR/10",
    "Articlenumber": 20212864
  },
  {
    "Description": "U-AXQJ-EMC 4x50 AFV/16",
    "Articlenumber": 20078798
  },
  {
    "Description": "AXQJ-EMC Pure 4x50 AFV/16",
    "Articlenumber": 20212865
  },
  {
    "Description": "U-AXQJ-EMC 4x95 AFV/35",
    "Articlenumber": 20078832
  },
  {
    "Description": "AXQJ-EMC Pure 4x95 AFV/35",
    "Articlenumber": 20212866
  },
  {
    "Description": "U-AXQJ-EMC 4x150 AFV/50",
    "Articlenumber": 20078315
  },
  {
    "Description": "AXQJ-EMC Pure 4x150 AFV/50",
    "Articlenumber": 20212867
  },
  {
    "Description": "U-AXQJ-EMC 4x240 AFV/70",
    "Articlenumber": 20078316
  },
  {
    "Description": "AXQJ-EMC Pure 4x240 AFV/70",
    "Articlenumber": 20212868
  },
  {
    "Description": "U-HIKJ-� 1x25",
    "Articlenumber": 20115233
  },
  {
    "Description": "U-TXXP 1x150 FR",
    "Articlenumber": 20102274
  },
  {
    "Description": "U-AURA 3x50/29",
    "Articlenumber": 20078861
  },
  {
    "Description": "U-AURA 3x95/57",
    "Articlenumber": 20078862
  },
  {
    "Description": "U-AURA 3x150/88",
    "Articlenumber": 20078860
  },
  {
    "Description": "XMK-PE 1x240 SVART",
    "Articlenumber": 20078132
  },
  {
    "Description": "XIK-PE-CL 1x120 3,6kV",
    "Articlenumber": 20148025
  },
  {
    "Description": "XIK AL-S 90 4x150",
    "Articlenumber": 20170293
  },
  {
    "Description": "XIK AL-S 90 4x240",
    "Articlenumber": 20170292
  },
  {
    "Description": "U-PFSP 3x25 AFR/10",
    "Articlenumber": 20102275
  },
  {
    "Description": "U-PFSP 3x50 AFV/16",
    "Articlenumber": 20102276
  },
  {
    "Description": "U-PFSP 3x95 AFV/35",
    "Articlenumber": 20102277
  },
  {
    "Description": "U-PFSP 3x150 AFV/50",
    "Articlenumber": 20102278
  },
  {
    "Description": "U-PFSP 3x240 AFV/70",
    "Articlenumber": 20102279
  },
  {
    "Description": "U-PFSP 4x25 AFR/10",
    "Articlenumber": 20102280
  },
  {
    "Description": "U-PFSP 4x50 AFV/16",
    "Articlenumber": 20102281
  },
  {
    "Description": "U-PFSP 4x95 AFV/35",
    "Articlenumber": 20102282
  },
  {
    "Description": "U-PFSP 4x150 AFV/50",
    "Articlenumber": 20102283
  },
  {
    "Description": "U-PFSP 4x240 AFV/70",
    "Articlenumber": 20102284
  },
  {
    "Description": "U-PFSP 3x25 FR/16",
    "Articlenumber": 20102285
  },
  {
    "Description": "U-PFSP 3x35 FV/16",
    "Articlenumber": 20102286
  },
  {
    "Description": "U-PFSP 3x50 FV/25",
    "Articlenumber": 20102289
  },
  {
    "Description": "U-PFSP 4x25 FR/16",
    "Articlenumber": 20102290
  },
  {
    "Description": "XIK ALM-S 90 4x50",
    "Articlenumber": 20110460
  },
  {
    "Description": "XIK ALM-S 90 4x95",
    "Articlenumber": 20111195
  },
  {
    "Description": "XIK ALM-S 90 4x150",
    "Articlenumber": 20111194
  },
  {
    "Description": "XIK ALM-S 90 4x240",
    "Articlenumber": 20102401
  },
  {
    "Description": "N1XE-AR 5G50 LIGHT",
    "Articlenumber": 20159482
  },
  {
    "Description": "U-TFSP 3x240 AFV/70",
    "Articlenumber": 20102291
  },
  {
    "Description": "U-PFXP 4G25 AFR",
    "Articlenumber": 20102292
  },
  {
    "Description": "U-PFXP 4G50 AFV",
    "Articlenumber": 20102293
  },
  {
    "Description": "U-PFXP 4G95 AFV",
    "Articlenumber": 20102294
  },
  {
    "Description": "U-PFXP 5G25 AFR",
    "Articlenumber": 20102295
  },
  {
    "Description": "U-PFXP 5G50 AFR",
    "Articlenumber": 20102296
  },
  {
    "Description": "U-PFXP 5G95 AFR",
    "Articlenumber": 20102297
  },
  {
    "Description": "U-PFXP 4G25 FR",
    "Articlenumber": 20102298
  },
  {
    "Description": "U-PFXP 4G35 FV",
    "Articlenumber": 20102299
  },
  {
    "Description": "U-PFXP 4G50 FV",
    "Articlenumber": 20102300
  },
  {
    "Description": "U-PFXP 4G95 FV",
    "Articlenumber": 20102301
  },
  {
    "Description": "U-PFXP 5G25 FR",
    "Articlenumber": 20179911
  },
  {
    "Description": "U-PFXP 5G50 FR",
    "Articlenumber": 20179912
  },
  {
    "Description": "U-HIK-CU 4x35 SAP nr: 20170176",
    "Articlenumber": 20328833
  },
  {
    "Description": "AXL RR 1x185",
    "Articlenumber": 20356292
  },
  {
    "Description": "AXL RR 1x185",
    "Articlenumber": 20423810
  },
  {
    "Description": "AXL RR 1x240",
    "Articlenumber": 20423952
  },
  {
    "Description": "AXL ALLGROUND RR 1x185",
    "Articlenumber": 20356293
  },
  {
    "Description": "FX 1x240 SVART",
    "Articlenumber": 20129114
  },
  {
    "Description": "U-FKTKV 3x25/16",
    "Articlenumber": 20110459
  },
  {
    "Description": "PEX-ISOL CUTR 19x1,50+19x1,53",
    "Articlenumber": 20102547
  },
  {
    "Description": "U-PEX-ISOL CUTR 30x1,50+30x1,53",
    "Articlenumber": 20162169
  },
  {
    "Description": "FX 1x70 PEX-ISOLERAD JORDLINA",
    "Articlenumber": 20114762
  },
  {
    "Description": "ALTR 2,27",
    "Articlenumber": 1000062104
  },
  {
    "Description": "U-ALTR 1,82",
    "Articlenumber": 1000062105
  },
  {
    "Description": "ALTR 2,00 HD",
    "Articlenumber": 1000062106
  },
  {
    "Description": "ALTR 2,36",
    "Articlenumber": 1000062107
  },
  {
    "Description": "ALTR 2,50 HD",
    "Articlenumber": 1000062108
  },
  {
    "Description": "ALTR 2,61",
    "Articlenumber": 1000062109
  },
  {
    "Description": "ALTR 2,96",
    "Articlenumber": 1000062110
  },
  {
    "Description": "ALTR 3,07",
    "Articlenumber": 1000062111
  },
  {
    "Description": "ALTR 3,30",
    "Articlenumber": 1000062112
  },
  {
    "Description": "U-ALTR 3,93",
    "Articlenumber": 1000062113
  },
  {
    "Description": "ALTR 4,47",
    "Articlenumber": 1000062114
  },
  {
    "Description": "ALTR 1,60 HD",
    "Articlenumber": 1000066789
  },
  {
    "Description": "ALTR 3,76",
    "Articlenumber": 1000075420
  },
  {
    "Description": "U-ALTR 3,02",
    "Articlenumber": 1000075437
  },
  {
    "Description": "ALTR 2,90",
    "Articlenumber": 1000085776
  },
  {
    "Description": "ALTR 2,92",
    "Articlenumber": 1000097181
  },
  {
    "Description": "ALTR 2,36",
    "Articlenumber": 1000111641
  },
  {
    "Description": "ALTR 2,92",
    "Articlenumber": 1000111642
  },
  {
    "Description": "ALTR 3,30",
    "Articlenumber": 1000111643
  },
  {
    "Description": "ALTR 4,91",
    "Articlenumber": 1000123325
  },
  {
    "Description": "U-STR PE D=2,9",
    "Articlenumber": 1000062115
  },
  {
    "Description": "U-STR PE D=3,8",
    "Articlenumber": 1000062116
  },
  {
    "Description": "U-STR PE D=5,0",
    "Articlenumber": 1000062117
  },
  {
    "Description": "U-STR PE D=5,8",
    "Articlenumber": 1000062118
  },
  {
    "Description": "U-STR PE D=7,3",
    "Articlenumber": 1000063196
  },
  {
    "Description": "U-STR PVC  D=2,8",
    "Articlenumber": 1000062119
  },
  {
    "Description": "U-STR PVC  D=3,8",
    "Articlenumber": 1000062120
  },
  {
    "Description": "U-STR PVC  D=4,7",
    "Articlenumber": 1000062121
  },
  {
    "Description": "U-STR PVC  D=6,2",
    "Articlenumber": 1000062122
  },
  {
    "Description": "U-STR PVC  D=8,0",
    "Articlenumber": 1000062123
  },
  {
    "Description": "U-STR PVC  D=10,5",
    "Articlenumber": 1000062124
  },
  {
    "Description": "U-ALLE 95 F19 RU KOMP LT",
    "Articlenumber": 1000062125
  },
  {
    "Description": "U-ALLE 240 F37 RU KOMP LT",
    "Articlenumber": 1000062126
  },
  {
    "Description": "ALLE 400 F61 RU KOMP LT",
    "Articlenumber": 1000062127
  },
  {
    "Description": "ALLE 500 F61 RU KOMP LT",
    "Articlenumber": 1000062128
  },
  {
    "Description": "ALLE 630 F61 RU KOMP LT",
    "Articlenumber": 1000062129
  },
  {
    "Description": "U-ALLE 95 F18 SEKT 90",
    "Articlenumber": 1000062130
  },
  {
    "Description": "ALLE 95 F18 SEKT 90",
    "Articlenumber": 20180245
  },
  {
    "Description": "ALLE 800 F59 RU KOMP LT",
    "Articlenumber": 1000082495
  },
  {
    "Description": "ALLE 150 F36 RU KOMP GL",
    "Articlenumber": 20265108
  },
  {
    "Description": "CULE 35 F7 OFT RU KOMP (WISKI)",
    "Articlenumber": 1000062131
  },
  {
    "Description": "CULE 70 F19 OFT RU KOMP(WISKI)",
    "Articlenumber": 1000062132
  },
  {
    "Description": "CULE 25 F7 RU KOMP (TSLF-J)",
    "Articlenumber": 1000063504
  },
  {
    "Description": "CULE 50 F7 RU KOMP (TSLF-J)",
    "Articlenumber": 1000063506
  },
  {
    "Description": "CULE 25 F7 RU GL OKOMP",
    "Articlenumber": 20172605
  },
  {
    "Description": "CULE 16 F7 RU GL OKOMP",
    "Articlenumber": 20175132
  },
  {
    "Description": "U-CULE 25 F7 RU KOMP",
    "Articlenumber": 20175133
  },
  {
    "Description": "CULE 35 F7 RU GL OKOMP",
    "Articlenumber": 20175134
  },
  {
    "Description": "U-CULE 50 F7 RU KOMP",
    "Articlenumber": 20175135
  },
  {
    "Description": "U-CULE 50 F19 RU GL OKOMP",
    "Articlenumber": 20175136
  },
  {
    "Description": "U-CULE 70 F19 RU GL OKOMP",
    "Articlenumber": 20175137
  },
  {
    "Description": "U-CULE 95 F19 RU GL OKOMP",
    "Articlenumber": 20175138
  },
  {
    "Description": "U-CULE 120 F37 RU GL OKOMP",
    "Articlenumber": 20175139
  },
  {
    "Description": "U-CULE 150 F37 RU GL OKOMP",
    "Articlenumber": 20175140
  },
  {
    "Description": "Halvfabr till ALLE 630 F61 RU KOMP LT",
    "Articlenumber": 1000085092
  },
  {
    "Description": "CULE 50 F7 RU GL OKOMP",
    "Articlenumber": 20269691
  },
  {
    "Description": "U-CULE 70 F19 RU KOMP",
    "Articlenumber": 20271111
  },
  {
    "Description": "Halvfabr till ALLE 800 F59 RU KOMP LT",
    "Articlenumber": 1000112453
  },
  {
    "Description": "ALLE 185 F36 RU KOMP",
    "Articlenumber": 1000113844
  },
  {
    "Description": "ALLE 300 F37 RU KOMP LT",
    "Articlenumber": 1000114479
  },
  {
    "Description": "Halvfabr till ALLE 1000 F59 RU KOMP LT",
    "Articlenumber": 1000123412
  },
  {
    "Description": "U-ALLE 1000 F59 RU KOMP LT",
    "Articlenumber": 1000123378
  },
  {
    "Description": "ALLE 240 F37 SEKT 90",
    "Articlenumber": 20458872
  },
  {
    "Description": "ALLE 150 F37 SEKT 90",
    "Articlenumber": 20479099
  },
  {
    "Description": "U-AX 1x240 SEKT 90 BL�",
    "Articlenumber": 1000071016
  },
  {
    "Description": "U-AX 1x240 SEKT 90 GR�",
    "Articlenumber": 1000071017
  },
  {
    "Description": "U-AX 1x240 SEKT 90 SVART",
    "Articlenumber": 1000071018
  },
  {
    "Description": "U-AX 1x240 SEKT 90 BRUN",
    "Articlenumber": 1000071019
  },
  {
    "Description": "U-AX 1G240 SEKT 90 GR�N/GUL",
    "Articlenumber": 1000071020
  },
  {
    "Description": "FX 1x50 SEKT 90 SVART",
    "Articlenumber": 20166526
  },
  {
    "Description": "FX 1x50 SEKT 90 BRUN",
    "Articlenumber": 20166525
  },
  {
    "Description": "FX 1x50 SEKT 90 GR�",
    "Articlenumber": 20166528
  },
  {
    "Description": "FX 1G50 SEKT 90 GR�N/GUL",
    "Articlenumber": 20166527
  },
  {
    "Description": "FX 1x70 SEKT 90 SVART",
    "Articlenumber": 20166530
  },
  {
    "Description": "FX 1x70 SEKT 90 BRUN",
    "Articlenumber": 20166532
  },
  {
    "Description": "FX 1x70 SEKT 90 GR�",
    "Articlenumber": 20166531
  },
  {
    "Description": "FX 1G70 SEKT 90 GR�N/GUL",
    "Articlenumber": 20166529
  },
  {
    "Description": "CULE 400 F60 RU KOMP",
    "Articlenumber": 20312750
  },
  {
    "Description": "U-CUTR 4,70 OFT GL         K0903",
    "Articlenumber": 1000062133
  },
  {
    "Description": "U-CUTR 3,94 OFT GL         K0195",
    "Articlenumber": 1000062134
  },
  {
    "Description": "CUTR 3,94 OFT GL",
    "Articlenumber": 1000062135
  },
  {
    "Description": "U-CUTR 3,70 OFT GL         K0191",
    "Articlenumber": 1000062136
  },
  {
    "Description": "U-CUTR 3,47 OFT GL         K0190",
    "Articlenumber": 1000062137
  },
  {
    "Description": "CUTR 3,43 OFT GL",
    "Articlenumber": 1000062138
  },
  {
    "Description": "CUTR 3,36 OFT GL",
    "Articlenumber": 1000062139
  },
  {
    "Description": "U-CUTR 3,36 OFT GL         K0185",
    "Articlenumber": 1000062140
  },
  {
    "Description": "CUTR 3,12 OFT GL",
    "Articlenumber": 1000062141
  },
  {
    "Description": "U-CUTR 3,12 OFT GL         K0182",
    "Articlenumber": 1000062142
  },
  {
    "Description": "U-CUTR 3,06 OFT GL         K0180",
    "Articlenumber": 1000062143
  },
  {
    "Description": "CUTR 3,06 OFT GL",
    "Articlenumber": 1000062144
  },
  {
    "Description": "U-CUTR 3,00 OFT GL         K0756",
    "Articlenumber": 1000062145
  },
  {
    "Description": "CUTR 2,96 OFT GL",
    "Articlenumber": 1000062146
  },
  {
    "Description": "U-CUTR 2,72 OFT GL         K0507",
    "Articlenumber": 1000062147
  },
  {
    "Description": "CUTR 2,68 OFT GL",
    "Articlenumber": 1000062148
  },
  {
    "Description": "CUTR 2,68 OFT GL FAT",
    "Articlenumber": 1000062149
  },
  {
    "Description": "U-CUTR 2,68 OFT GL            HVC",
    "Articlenumber": 1000062150
  },
  {
    "Description": "U-CUTR 2,66 OFT GL         K0171",
    "Articlenumber": 1000062151
  },
  {
    "Description": "CUTR 2,49 OFT GL",
    "Articlenumber": 1000062152
  },
  {
    "Description": "U-CUTR 2,45 OFT GL         K0738",
    "Articlenumber": 1000062153
  },
  {
    "Description": "CUTR 2,29 OFT GL",
    "Articlenumber": 1000062154
  },
  {
    "Description": "U-CUTR 2,27 OFT GL         K0163",
    "Articlenumber": 1000062155
  },
  {
    "Description": "CUTR 2,10 OFT GL",
    "Articlenumber": 1000062156
  },
  {
    "Description": "U-CUTR 2,00 OFT GL         K0156",
    "Articlenumber": 1000062157
  },
  {
    "Description": "CUTR 1,82 OFT GL",
    "Articlenumber": 1000062158
  },
  {
    "Description": "U-CUTR 1,78 OFT GL         K0150",
    "Articlenumber": 1000062159
  },
  {
    "Description": "CUTR 1,70 OFT GL",
    "Articlenumber": 1000062160
  },
  {
    "Description": "CUTR 1,53 OFT GL",
    "Articlenumber": 1000062161
  },
  {
    "Description": "CUTR 1,42 OFT H�RD",
    "Articlenumber": 1000062162
  },
  {
    "Description": "U-CUTR 1,30 OFT GL         K0836",
    "Articlenumber": 1000062163
  },
  {
    "Description": "CUTR 1,11 OFT GL",
    "Articlenumber": 1000062164
  },
  {
    "Description": "CUTR 0,82 OFT GL",
    "Articlenumber": 1000062165
  },
  {
    "Description": "CUTR 2,27 OFT GL",
    "Articlenumber": 1000062166
  },
  {
    "Description": "U-CUTR 3,39 OFT GL",
    "Articlenumber": 1000062167
  },
  {
    "Description": "U-CUTR 3,31 OFT GL",
    "Articlenumber": 1000062168
  },
  {
    "Description": "U-CUTR 0,82 OFT GL         K0133",
    "Articlenumber": 1000063609
  },
  {
    "Description": "U-CUTR 4,28 OFT GL         K0983",
    "Articlenumber": 1000062863
  },
  {
    "Description": "U-CUTR 1,00 OFT GL         K0911",
    "Articlenumber": 1000064621
  },
  {
    "Description": "CUTR 2,63 OFT GL",
    "Articlenumber": 1000074002
  },
  {
    "Description": "CUTR 2,52 OFT GL",
    "Articlenumber": 1000074094
  },
  {
    "Description": "CUTR 1,78 OFT GL",
    "Articlenumber": 1000074095
  },
  {
    "Description": "U-CUTR 2,00 OFT GL",
    "Articlenumber": 1000075265
  },
  {
    "Description": "CUTR 2,34 OFT GL",
    "Articlenumber": 1000083030
  },
  {
    "Description": "CUTR 1,90 OFT GL",
    "Articlenumber": 1000083577
  },
  {
    "Description": "CUTR 2,18 OFT GL",
    "Articlenumber": 1000092080
  },
  {
    "Description": "CUTR 3,00 OFT GL",
    "Articlenumber": 1000095826
  },
  {
    "Description": "CUTR 2,29 OFT GL FAT",
    "Articlenumber": 1000105573
  },
  {
    "Description": "CUTR 1,53 OFT GL",
    "Articlenumber": 1000111644
  },
  {
    "Description": "CUTR 1,82 OFT GL",
    "Articlenumber": 1000111645
  },
  {
    "Description": "CUTR 2,52 OFT GL",
    "Articlenumber": 1000111646
  },
  {
    "Description": "CUTR 1,82 OFT GL FAT",
    "Articlenumber": 20391782
  },
  {
    "Description": "ALTR 3,30 L�G CO2",
    "Articlenumber": 1000251770
  },
  {
    "Description": "AX-F 1x240 LT 24kV",
    "Articlenumber": 1000063024
  },
  {
    "Description": "AX-F 1x240 LT 12kV",
    "Articlenumber": 1000063425
  },
  {
    "Description": "AX-F 1x95 LT 24kV",
    "Articlenumber": 1000063610
  },
  {
    "Description": "AX-F 1x95 LT 12kV",
    "Articlenumber": 1000063611
  },
  {
    "Description": "AX-F 1x50 LT 24kV",
    "Articlenumber": 1000063612
  },
  {
    "Description": "STLI-L 62 F7 RU OKOMP",
    "Articlenumber": 20454637
  },
  {
    "Description": "U-PFSP 2x1,5/1,5 AL R25 CO",
    "Articlenumber": 20155091
  },
  {
    "Description": "U-PFSP 2x2,5/2,5 AL R25 CO",
    "Articlenumber": 20155092
  },
  {
    "Description": "U-EXQ-LIGHT 3G1,5 R10 CO",
    "Articlenumber": 20173918
  },
  {
    "Description": "U-EXQ-LIGHT 3G1,5 R25 CO",
    "Articlenumber": 20173919
  },
  {
    "Description": "U-EXQ-LIGHT 3G1,5 R50 CO",
    "Articlenumber": 20173920
  },
  {
    "Description": "U-EXQ-LIGHT 4G1,5 R10 CO",
    "Articlenumber": 20173921
  },
  {
    "Description": "U-EXQ-LIGHT 4G1,5 R25 CO",
    "Articlenumber": 20173922
  },
  {
    "Description": "U-EXQ-LIGHT 5G1,5 R10 CO",
    "Articlenumber": 20173923
  },
  {
    "Description": "U-EXQ-LIGHT 5G1,5 R25 CO",
    "Articlenumber": 20173924
  },
  {
    "Description": "U-EXQ-LIGHT 5G2,5 R10 CO",
    "Articlenumber": 20173926
  },
  {
    "Description": "U-EXQ-LIGHT 5G2,5 R25 CO",
    "Articlenumber": 20173927
  },
  {
    "Description": "U-EQLQ Tube Pure 3G1,5 R10 CO",
    "Articlenumber": 20218863
  },
  {
    "Description": "U-EQLQ Tube Pure 3G1,5 R25 CO",
    "Articlenumber": 20218864
  },
  {
    "Description": "U-EQLQ Tube Pure 3G2,5 R10 CO",
    "Articlenumber": 20218865
  },
  {
    "Description": "U-EQLQ Tube Pure 3G2,5 R25 CO",
    "Articlenumber": 20218866
  },
  {
    "Description": "U-EQLQ Tube Pure 5G1,5 R10 CO",
    "Articlenumber": 20218867
  },
  {
    "Description": "U-EQLQ Tube Pure 5G1,5 R25 CO",
    "Articlenumber": 20218868
  },
  {
    "Description": "U-EQLQ Tube Pure 5G2,5 R10 CO",
    "Articlenumber": 20218869
  },
  {
    "Description": "U-EQLQ Tube Pure 5G2,5 R25 CO",
    "Articlenumber": 20218870
  },
  {
    "Description": "U-EXQ-Pure 3G1,5 R10 CO",
    "Articlenumber": 20218987
  },
  {
    "Description": "U-EXQ-Pure 3G1,5 R25 CO",
    "Articlenumber": 20218988
  },
  {
    "Description": "U-EXQ-Pure 3G1,5 R50 CO",
    "Articlenumber": 20221008
  },
  {
    "Description": "U-EXQ-Pure 4G1,5 R10 CO",
    "Articlenumber": 20218989
  },
  {
    "Description": "U-EXQ-Pure 4G1,5 R25 CO",
    "Articlenumber": 20218990
  },
  {
    "Description": "U-EXQ-Pure 5G1,5 R10 CO",
    "Articlenumber": 20218991
  },
  {
    "Description": "U-EXQ-Pure 5G1,5 R25 CO",
    "Articlenumber": 20218992
  },
  {
    "Description": "U-EXQ-Pure 5G2,5 R10 CO",
    "Articlenumber": 20218993
  },
  {
    "Description": "U-EXQ-Pure 5G2,5 R25 CO",
    "Articlenumber": 20218994
  },
  {
    "Description": "U-EXLQ-PLUS 3G1,5 R10 CO",
    "Articlenumber": 20173930
  },
  {
    "Description": "U-EXLQ-PLUS 3G1,5 R25 CO",
    "Articlenumber": 20173941
  },
  {
    "Description": "U-EXLQ-PLUS 3G2,5 R10 CO",
    "Articlenumber": 20173942
  },
  {
    "Description": "U-EXLQ-PLUS 3G2,5 R25 CO",
    "Articlenumber": 20173943
  },
  {
    "Description": "U-EXLQ-PLUS 5G1,5 R10 CO",
    "Articlenumber": 20173944
  },
  {
    "Description": "U-EXLQ-PLUS 5G1,5 R25 CO",
    "Articlenumber": 20173945
  },
  {
    "Description": "U-EXLQ-PLUS 5G2,5 R10 CO",
    "Articlenumber": 20173946
  },
  {
    "Description": "U-EXLQ-PLUS 5G2,5 R25 CO",
    "Articlenumber": 20173947
  },
  {
    "Description": "U-EK/H07V-U 1,5 SVART R10 CO",
    "Articlenumber": 20153375
  },
  {
    "Description": "U-EK/H07V-U 1,5 SVART R25 CO",
    "Articlenumber": 20153376
  },
  {
    "Description": "U-EK/H07V-U 1,5 R�D R10 CO",
    "Articlenumber": 20153390
  },
  {
    "Description": "U-EK/H07V-U 1,5 R�D R25 CO",
    "Articlenumber": 20153401
  },
  {
    "Description": "U-EK/H07V-U 1,5 GR� R10 CO",
    "Articlenumber": 20153403
  },
  {
    "Description": "U-EK/H07V-U 1,5 GR� R25 CO",
    "Articlenumber": 20153404
  },
  {
    "Description": "U-EK/H07V-U 1,5 BL� R10 CO",
    "Articlenumber": 20153381
  },
  {
    "Description": "U-EK/H07V-U 1,5 BL� R25 CO",
    "Articlenumber": 20153382
  },
  {
    "Description": "U-EK/H07V-U 1,5 BRUN R10 CO",
    "Articlenumber": 20153384
  },
  {
    "Description": "U-EK/H07V-U 1,5 BRUN R25 CO",
    "Articlenumber": 20153385
  },
  {
    "Description": "U-EK/H07V-U 1,5 G/G R10 CO",
    "Articlenumber": 20153387
  },
  {
    "Description": "U-EK/H07V-U 1,5 G/G R25 CO",
    "Articlenumber": 20153388
  },
  {
    "Description": "U-EK/H07V-U 2,5 SVART R10 CO",
    "Articlenumber": 20153378
  },
  {
    "Description": "U-EK/H07V-U 2,5 SVART R25 CO",
    "Articlenumber": 20153379
  },
  {
    "Description": "U-EK/H07V-U 2,5 R�D R10 CO",
    "Articlenumber": 20153412
  },
  {
    "Description": "U-EK/H07V-U 2,5 R�D R25 CO",
    "Articlenumber": 20153413
  },
  {
    "Description": "U-EK/H07V-U 2,5 GR� R10 CO",
    "Articlenumber": 20153414
  },
  {
    "Description": "U-EK/H07V-U 2,5 GR� R25 CO",
    "Articlenumber": 20153415
  },
  {
    "Description": "U-EK/H07V-U 2,5 BL� R10 CO",
    "Articlenumber": 20153406
  },
  {
    "Description": "U-EK/H07V-U 2,5 BL� R25 CO",
    "Articlenumber": 20153407
  },
  {
    "Description": "U-EK/H07V-U 2,5 BRUN R10 CO",
    "Articlenumber": 20153408
  },
  {
    "Description": "U-EK/H07V-U 2,5 BRUN R25 CO",
    "Articlenumber": 20153409
  },
  {
    "Description": "U-EK/H07V-U 2,5 G/G R10 CO",
    "Articlenumber": 20153410
  },
  {
    "Description": "U-EK/H07V-U 2,5 G/G R25 CO",
    "Articlenumber": 20153411
  },
  {
    "Description": "U-PRSuper 500V 2x1,5/1,5 R10 CO",
    "Articlenumber": 20130875
  },
  {
    "Description": "U-PRSuper 500V 2x1,5/1,5 R25 CO",
    "Articlenumber": 20130876
  },
  {
    "Description": "U-PRSuper 500V 2x2,5/2,5 R10 CO",
    "Articlenumber": 20130877
  },
  {
    "Description": "U-PRSuper 500V 2x2,5/2,5 R25 CO",
    "Articlenumber": 20130878
  },
  {
    "Description": "U-PRSuper 500V 3x1,5/1,5 R10 CO",
    "Articlenumber": 20130879
  },
  {
    "Description": "U-PRSuper 500V 3x1,5/1,5 R25 CO",
    "Articlenumber": 20130880
  },
  {
    "Description": "U-PRSuper 500V 3x2,5/2,5 R10 CO",
    "Articlenumber": 20132091
  },
  {
    "Description": "U-PRSuper 500V 3x2,5/2,5 R25 CO",
    "Articlenumber": 20132092
  },
  {
    "Description": "U-NYM-J 3x1,5 RE GR� R10 CO",
    "Articlenumber": 20153371
  },
  {
    "Description": "U-NYM-J 3x1,5 RE GR� R25 CO",
    "Articlenumber": 20153372
  },
  {
    "Description": "U-NYM-J 3x2,5 RE GR� R10 CO",
    "Articlenumber": 20153373
  },
  {
    "Description": "U-NYM-J 3x2,5 RE GR� R25 CO",
    "Articlenumber": 20153374
  },
  {
    "Description": "U-QWPK 3G1,5 GUL R10 CO",
    "Articlenumber": 20155093
  },
  {
    "Description": "ACEFLEX RV-K 3G1,5 R10 A0",
    "Articlenumber": 20143736
  },
  {
    "Description": "ACEFLEX RV-K 3G2,5 R10 A0",
    "Articlenumber": 20143737
  },
  {
    "Description": "ACEFLEX RV-K 5G2,5 R10 A0",
    "Articlenumber": 20143738
  },
  {
    "Description": "PFSP 2x1,5/1,5 R25",
    "Articlenumber": 20392355
  },
  {
    "Description": "PFSP 2x2,5/2,5 R25",
    "Articlenumber": 20392357
  },
  {
    "Description": "U-EKRK 3G1,5 R10 A0",
    "Articlenumber": 20143711
  },
  {
    "Description": "U-EKRK 3G1,5 R25 A0",
    "Articlenumber": 20143376
  },
  {
    "Description": "U-EKRK 4G1,5 R10 A0",
    "Articlenumber": 20143378
  },
  {
    "Description": "U-EKRK 4G1,5 R25 A0",
    "Articlenumber": 20143379
  },
  {
    "Description": "U-EXQ-LIGHT 3G1,5 R10 A0",
    "Articlenumber": 20141065
  },
  {
    "Description": "U-EXQ-LIGHT 3G1,5 R25 A0",
    "Articlenumber": 20140925
  },
  {
    "Description": "U-EXQ-LIGHT 3G2,5 R10 A0",
    "Articlenumber": 20140930
  },
  {
    "Description": "U-EXQ-LIGHT 3G2,5 R25 A0",
    "Articlenumber": 20142101
  },
  {
    "Description": "U-EXQ-LIGHT 4G1,5 R10 A0",
    "Articlenumber": 20141123
  },
  {
    "Description": "U-EXQ-LIGHT 4G1,5 R25 A0",
    "Articlenumber": 20141124
  },
  {
    "Description": "U-EXQ-LIGHT 5G1,5 R10 A0",
    "Articlenumber": 20141494
  },
  {
    "Description": "U-EXQ-LIGHT 5G1,5 R25 A0",
    "Articlenumber": 20141495
  },
  {
    "Description": "U-EXQ-LIGHT 5G2,5 R10 A0",
    "Articlenumber": 20141496
  },
  {
    "Description": "U-EXQ-LIGHT 5G2,5 R25 A0",
    "Articlenumber": 20141497
  },
  {
    "Description": "QLO Pure 3G1,5 R10 A0",
    "Articlenumber": 20218671
  },
  {
    "Description": "QLO Pure 3G1,5 R25 A0",
    "Articlenumber": 20218672
  },
  {
    "Description": "QLO Pure 4G1,5 R10 A0",
    "Articlenumber": 20218673
  },
  {
    "Description": "QLO Pure 4G1,5 R25 A0",
    "Articlenumber": 20218674
  },
  {
    "Description": "EQLQ Tube Pure 3G1,5 R10 A0",
    "Articlenumber": 20218764
  },
  {
    "Description": "EQLQ Tube Pure 3G1,5 R25 A0",
    "Articlenumber": 20218765
  },
  {
    "Description": "EQLQ Tube Pure 4G1,5 R10 A0",
    "Articlenumber": 20218766
  },
  {
    "Description": "EQLQ Tube Pure 4G1,5 R25 A0",
    "Articlenumber": 20218767
  },
  {
    "Description": "EQLQ Tube Pure 5G1,5 R10 A0",
    "Articlenumber": 20218768
  },
  {
    "Description": "EQLQ Tube Pure 5G1,5 R25 A0",
    "Articlenumber": 20218769
  },
  {
    "Description": "EQLQ Tube Pure 5G2,5 R10 A0",
    "Articlenumber": 20218770
  },
  {
    "Description": "EQLQ Tube Pure 5G2,5 R25 A0",
    "Articlenumber": 20218771
  },
  {
    "Description": "EXQ Pure 3G1,5 R10 A0",
    "Articlenumber": 20218837
  },
  {
    "Description": "EXQ Pure 3G1,5 R25 A0",
    "Articlenumber": 20218838
  },
  {
    "Description": "EXQ Pure 3G2,5 R10 A0",
    "Articlenumber": 20218839
  },
  {
    "Description": "EXQ Pure 3G2,5 R25 A0",
    "Articlenumber": 20218840
  },
  {
    "Description": "EXQ Pure 4G1,5 R10 A0",
    "Articlenumber": 20218841
  },
  {
    "Description": "EXQ Pure 4G1,5 R25 A0",
    "Articlenumber": 20218842
  },
  {
    "Description": "EXQ Pure 5G1,5 R10 A0",
    "Articlenumber": 20218843
  },
  {
    "Description": "EXQ Pure 5G1,5 R25 A0",
    "Articlenumber": 20218844
  },
  {
    "Description": "EXQ Pure 5G2,5 R10 A0",
    "Articlenumber": 20218845
  },
  {
    "Description": "EXQ Pure 5G2,5 R25 A0",
    "Articlenumber": 20218846
  },
  {
    "Description": "FQ Pure 1,5 VIT R20 A0",
    "Articlenumber": 20220946
  },
  {
    "Description": "FQ Pure 1,5 SVART R20 A0",
    "Articlenumber": 20220947
  },
  {
    "Description": "FQ Pure 1,5 BL� R20 A0",
    "Articlenumber": 20220948
  },
  {
    "Description": "FQ Pure 1,5 BRUN R20 A0",
    "Articlenumber": 20220949
  },
  {
    "Description": "FQ Pure 1,5 G/G R20 A0",
    "Articlenumber": 20220950
  },
  {
    "Description": "FQ Pure 1,5 ORANGE R20 A0",
    "Articlenumber": 20220951
  },
  {
    "Description": "FQ Pure 2,5 VIT R20 A0",
    "Articlenumber": 20220952
  },
  {
    "Description": "FQ Pure 2,5 SVART R20 A0",
    "Articlenumber": 20220953
  },
  {
    "Description": "FQ Pure 2,5 BL� R20 A0",
    "Articlenumber": 20220954
  },
  {
    "Description": "FQ Pure 2,5 BRUN R20 A0",
    "Articlenumber": 20220955
  },
  {
    "Description": "FQ Pure 2,5 G/G R20 A0",
    "Articlenumber": 20220956
  },
  {
    "Description": "FQ Pure 2,5 ORANGE R20 A0",
    "Articlenumber": 20220957
  },
  {
    "Description": "U-EXLQ-PLUS 3G1,5 R10 A0",
    "Articlenumber": 20141498
  },
  {
    "Description": "U-EXLQ-PLUS 3G1,5 R25 A0",
    "Articlenumber": 20141499
  },
  {
    "Description": "U-EXLQ-PLUS 4G1,5 R10 A0",
    "Articlenumber": 20141500
  },
  {
    "Description": "U-EXLQ-PLUS 4G1,5 R25 A0",
    "Articlenumber": 20142771
  },
  {
    "Description": "U-EXLQ-PLUS 5G1,5 R10 A0",
    "Articlenumber": 20142772
  },
  {
    "Description": "U-EXLQ-PLUS 5G1,5 R25 A0",
    "Articlenumber": 20142773
  },
  {
    "Description": "U-EXLQ-PLUS 5G2,5 R10 A0",
    "Articlenumber": 20141053
  },
  {
    "Description": "U-EXLQ-PLUS 5G2,5 R25 A0",
    "Articlenumber": 20141055
  },
  {
    "Description": "U-FK/H07V-R 1,5 VIT R20 A0",
    "Articlenumber": 20144803
  },
  {
    "Description": "U-FK/H07V-R 1,5 SVART R20 A0",
    "Articlenumber": 20144801
  },
  {
    "Description": "U-FK/H07V-R 1,5 BL� R20 A0",
    "Articlenumber": 20141688
  },
  {
    "Description": "U-FK/H07V-R 1,5 BRUN R20 A0",
    "Articlenumber": 20141689
  },
  {
    "Description": "U-FK/H07V-R 1,5 G/G R20 A0",
    "Articlenumber": 20143380
  },
  {
    "Description": "U-FK/H07V-R 1,5 ORANGE R20 A0",
    "Articlenumber": 20144802
  },
  {
    "Description": "U-FK/H07V-R 2,5 VIT R20 A0",
    "Articlenumber": 20144808
  },
  {
    "Description": "U-FK/H07V-R 2,5 SVART R20 A0",
    "Articlenumber": 20144807
  },
  {
    "Description": "U-FK/H07V-R 2,5 BL� R20 A0",
    "Articlenumber": 20144804
  },
  {
    "Description": "U-FK/H07V-R 2,5 BRUN R20 A0",
    "Articlenumber": 20144805
  },
  {
    "Description": "U-FK/H07V-R 2,5 G/G R20 A0",
    "Articlenumber": 20144806
  },
  {
    "Description": "U-FK/H07V-R 2,5 ORANGE R20 A0",
    "Articlenumber": 20144809
  },
  {
    "Description": "PRSuper 500V 2x1,5/1,5 R10",
    "Articlenumber": 20392207
  },
  {
    "Description": "PRSuper 500V 2x1,5/1,5 R25",
    "Articlenumber": 20392129
  },
  {
    "Description": "PRSuper 500V 2x1,5/1,5 R50",
    "Articlenumber": 20392075
  },
  {
    "Description": "PRSuper 500V 2x2,5/2,5 R10",
    "Articlenumber": 20392099
  },
  {
    "Description": "PRSuper 500V 2x2,5/2,5 R25",
    "Articlenumber": 20392130
  },
  {
    "Description": "PRSuper 500V 2x2,5/2,5 R50",
    "Articlenumber": 20392039
  },
  {
    "Description": "PRSuper 500V 3x1,5/1,5 R10",
    "Articlenumber": 20392208
  },
  {
    "Description": "PRSuper 500V 3x1,5/1,5 R25",
    "Articlenumber": 20392284
  },
  {
    "Description": "PRSuper 500V 3x2,5/2,5 R10",
    "Articlenumber": 20392262
  },
  {
    "Description": "PRSuper 500V 3x2,5/2,5 R25",
    "Articlenumber": 20392304
  },
  {
    "Description": "RQ LED 2X0,75 R25 A0",
    "Articlenumber": 20141447
  },
  {
    "Description": "RQ LED 2X0,75 R50 A0",
    "Articlenumber": 20141448
  },
  {
    "Description": "RXQ 3G1,5 R10 A0",
    "Articlenumber": 20141445
  },
  {
    "Description": "RXQ 3G1,5 R25 A0",
    "Articlenumber": 20141446
  },
  {
    "Description": "SKK 3G0,75 R10 A0",
    "Articlenumber": 20143028
  },
  {
    "Description": "SKK 3G0,75 R25 A0",
    "Articlenumber": 20143029
  },
  {
    "Description": "SKX 2x0,75 R10 A0",
    "Articlenumber": 20143026
  },
  {
    "Description": "SKX 2x0,75 R25 A0",
    "Articlenumber": 20143027
  },
  {
    "Description": "TP90 2x1,5 VIT R20 A0",
    "Articlenumber": 20170434
  },
  {
    "Description": "QWPK 3G1,5 GUL R10 A0",
    "Articlenumber": 20143733
  },
  {
    "Description": "QWPK 3G1,5 GUL R25 A0",
    "Articlenumber": 20143734
  },
  {
    "Description": "ACEFLEX RV-K 3G2,5 R20 A1",
    "Articlenumber": 20151533
  },
  {
    "Description": "ACEFLEX RV-K 3G2,5 R50 A1",
    "Articlenumber": 20151534
  },
  {
    "Description": "ACEFLEX RV-K 5G2,5 R20 A1",
    "Articlenumber": 20151535
  },
  {
    "Description": "ACEFLEX RV-K 5G2,5 R50 A1",
    "Articlenumber": 20150854
  },
  {
    "Description": "PFSP 2x1,5/1,5 AL R10 A1",
    "Articlenumber": 20150856
  },
  {
    "Description": "PFSP 2x1,5/1,5 AL R25 A1",
    "Articlenumber": 20150857
  },
  {
    "Description": "PFSP 2x2,5/2,5 AL R10 A1",
    "Articlenumber": 20150858
  },
  {
    "Description": "PFSP 2x2,5/2,5 AL R25 A1",
    "Articlenumber": 20150859
  },
  {
    "Description": "H07RN-F 3G1,5 R5 A1",
    "Articlenumber": 20149324
  },
  {
    "Description": "H07RN-F 3G1,5 R10 A1",
    "Articlenumber": 20149326
  },
  {
    "Description": "H07RN-F 3G1,5 R25 A1",
    "Articlenumber": 20149327
  },
  {
    "Description": "H07RN-F 3G2,5 R5 A1",
    "Articlenumber": 20151136
  },
  {
    "Description": "H07RN-F 3G2,5 R10 A1",
    "Articlenumber": 20151137
  },
  {
    "Description": "H07RN-F 3G2,5 R25 A1",
    "Articlenumber": 20151138
  },
  {
    "Description": "H07RN-F 4G2,5 R10 A1",
    "Articlenumber": 20151139
  },
  {
    "Description": "H07RN-F 4G2,5 R25 A1",
    "Articlenumber": 20151140
  },
  {
    "Description": "H07RN-F 5G2,5 R5 A1",
    "Articlenumber": 20152731
  },
  {
    "Description": "H07RN-F 5G2,5 R10 A1",
    "Articlenumber": 20152732
  },
  {
    "Description": "H07RN-F 5G2,5 R25 A1",
    "Articlenumber": 20152733
  },
  {
    "Description": "H07Z-K 1x6,0 SVART R100 L-M",
    "Articlenumber": 20160675
  },
  {
    "Description": "H07Z-K 1G6,0 G/G R100 L-M",
    "Articlenumber": 20161562
  },
  {
    "Description": "H07Z-K 1x6,0 LJUSGR� R100 L-M",
    "Articlenumber": 20161561
  },
  {
    "Description": "H07Z-K 1x6,0 LJUSBL� R100 L-M",
    "Articlenumber": 20160350
  },
  {
    "Description": "H07Z-K 1x6,0 M�RKBL� R100 L-M",
    "Articlenumber": 20161563
  },
  {
    "Description": "ACEFLEX Pure 3G1,5 svart RZ1-K Dca R50",
    "Articlenumber": 20288817
  },
  {
    "Description": "ACEFLEX Pure 3G2,5 svart RZ1-K Dca R50",
    "Articlenumber": 20288818
  },
  {
    "Description": "ACEFLEX Pure 5G1,5 svart RZ1-K Dca R50",
    "Articlenumber": 20288819
  },
  {
    "Description": "ACEFLEX Pure 5G2,5 svart RZ1-K Dca R50",
    "Articlenumber": 20288820
  },
  {
    "Description": "ACEFLEX Pure E Path 3G1,5 0,6/1kV R50",
    "Articlenumber": 20437252
  },
  {
    "Description": "ACEFLEX Pure E Path 3G2,5 0,6/1kV R50",
    "Articlenumber": 20437251
  },
  {
    "Description": "ACEFLEX Pure E Path 5G1,5 0,6/1kV R50",
    "Articlenumber": 20437150
  },
  {
    "Description": "ACEFLEX Pure E Path 5G2,5 0,6/1kV R50",
    "Articlenumber": 20437261
  },
  {
    "Description": "FQ 105C 2,5 BRUN R250 RE",
    "Articlenumber": 20368761
  },
  {
    "Description": "FK/H07V-R 1,5 SVART R300 RE",
    "Articlenumber": 20262851
  },
  {
    "Description": "D05H(St)H-F 3G0,75/0,75 R50",
    "Articlenumber": 20154763
  },
  {
    "Description": "D05H(St)H-F 5G0,75/0,75 R50",
    "Articlenumber": 20154764
  },
  {
    "Description": "RQ Pure 35 SVART R25",
    "Articlenumber": 20328161
  },
  {
    "Description": "U-RQ 35 G/G R17",
    "Articlenumber": 20141687
  },
  {
    "Description": "U-RQ 35 G/G R25",
    "Articlenumber": 20196072
  },
  {
    "Description": "U-RQ-Pure 35 G/G R25",
    "Articlenumber": 20222377
  },
  {
    "Description": "DRAKAFLEX H07RN-F 3G1,5 R10",
    "Articlenumber": 20133543
  },
  {
    "Description": "DRAKAFLEX H07RN-F 3G1,5 R15",
    "Articlenumber": 20133544
  },
  {
    "Description": "DRAKAFLEX H07RN-F 3G1,5 R25",
    "Articlenumber": 20129616
  },
  {
    "Description": "XPJ 500V 3G1,5 R25",
    "Articlenumber": 20174535
  },
  {
    "Description": "XPJ 500V 3G2,5 R25",
    "Articlenumber": 20174536
  },
  {
    "Description": "PRSuper 500V 2x1,5/1,5 R5 GE",
    "Articlenumber": 20227797
  },
  {
    "Description": "PRSuper 500V 2x1,5/1,5 R10 GE",
    "Articlenumber": 20227798
  },
  {
    "Description": "U-PRSuper 500V 2x2,5/2,5 R5 GE",
    "Articlenumber": 20227799
  },
  {
    "Description": "U-PRSuper 500V 2x2,5/2,5 R10 GE",
    "Articlenumber": 20227800
  },
  {
    "Description": "EK 1,5 H07V-U SVART R200 Eca",
    "Articlenumber": 20075567
  },
  {
    "Description": "EK 1,5 H07V-U R�D R200",
    "Articlenumber": 20075045
  },
  {
    "Description": "EK 1,5 H07V-U BL� R200 Eca",
    "Articlenumber": 20075154
  },
  {
    "Description": "EK 1,5 H07V-U BRUN R200",
    "Articlenumber": 20079339
  },
  {
    "Description": "EK 1,5 H07V-U G/G R200",
    "Articlenumber": 20170122
  },
  {
    "Description": "EK 1,5 H07V-U LJUSGR� R200 Eca",
    "Articlenumber": 20075152
  },
  {
    "Description": "U-QWPK 5G6 RIB GUL R20",
    "Articlenumber": 20301578
  },
  {
    "Description": "RQ Pure 25 SVART R50",
    "Articlenumber": 20315372
  },
  {
    "Description": "RQ Pure 25 BL� R50",
    "Articlenumber": 20315373
  },
  {
    "Description": "RQ Pure 25 G/G R50",
    "Articlenumber": 20315374
  },
  {
    "Description": "RQ Pure 35 SVART R50",
    "Articlenumber": 20367874
  },
  {
    "Description": "RQ Pure 35 BL� R50",
    "Articlenumber": 20315375
  },
  {
    "Description": "RQ Pure 35 G/G R50",
    "Articlenumber": 20315376
  },
  {
    "Description": "EXQ Pure 3G1,5 R15",
    "Articlenumber": 20369937
  },
  {
    "Description": "EXQ Pure 3G2,5 R15",
    "Articlenumber": 20369360
  },
  {
    "Description": "EXQ Pure 5G2,5 R15",
    "Articlenumber": 20369338
  }
]


