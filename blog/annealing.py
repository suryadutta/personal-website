def T_anneal(T, ii, num_steps, num_burnin, num_analysis):

    #implement annealing code here

    if ii < num_analysis-num_analysis*0.10:
        T_a = -ii*(1/(num_analysis-num_analysis*0.10)) + (T+1)
    else:
        T_a = T

    return float(T_a)

def B_anneal(B, ii, num_steps, num_burnin, num_analysis):

    #implement annealing code here

    if ii < num_analysis-num_analysis*0.10:
        B_a = -ii*(1/(num_analysis-num_analysis*0.10)) + (B+1)
    else:
        B_a = B

    return float(B_a)
